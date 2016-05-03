

Meteor.methods({
    'judge.insert': function (item) {
        if (this.userId)
            return Judges.insert(item);
    },
    'judge.remove': function (_id) {
        if (this.userId)
            return Judges.remove(_id);
    },
    'judge.update': function (_id, update) {
        return Judges.update(_id, { set: update });
    },
    'judge.clear': function () {
        if (this.userId)
            return Judges.remove({})
    },
    'judge.visitor_judge': function (_id, score) {
        var visitor_id = Visitors.findOne({ connection_id: this.connection.id })._id;
        var visitor_isJudged = Judges.findOne({
            _id: _id,
            scores: { $elemMatch: { visitor_id: visitor_id } }
        })
        if (visitor_isJudged) {
            Judges.update({
                _id: _id,
                'scores.visitor_id': visitor_id
            }, {
                    $set: { 'scores.$.score': score }
                })
        } else {
            Judges.update(_id, {
                $addToSet: { scores: { visitor_id: visitor_id, score: score } }
            })
        }

        Meteor.call('judge.calculate', _id)
    },
    'judge.calculate': function (_id) {
        var judge = Judges.findOne(_id);

        var judgeCalculate = {
            scoreArr: judge.scores.map(function (e) {
                return e.score
            }).sort(),
            score_final: 0
        }
        var scoreLength = judgeCalculate.scoreArr.length;
        if (scoreLength > 2) {
            judgeCalculate.score_final = (judgeCalculate.scoreArr.slice(1, scoreLength - 1).reduce(function (p, c) { return p + c; }) /(scoreLength-2)).toFixed(2)
        }


        Judges.update(_id, {
            $set: judgeCalculate
        })
    }

})


Meteor.methods({
    'vote.insert': function (item) {
        if (this.userId)
            return Votes.insert(item);
    },
    'vote.remove': function (_id) {
        if (this.userId)
            return Votes.remove(_id);
    },
    'vote.update': function (_id, update) {
        return Votes.update(_id, { set: update });
    },
    'vote.clear': function () {
        if (this.userId)
            return Votes.remove({})
    },
    'vote.visitor_vote': function (_id, optionNumber) {
        var visitor_id = Visitors.findOne({ connection_id: this.connection.id })._id;
        var visitor_isVoted = Votes.findOne({
            _id: _id,
            votes: { $elemMatch: { visitor_id: visitor_id } }
        })
        if (visitor_isVoted) {
            Votes.update({
                _id: _id,
                'votes.visitor_id': visitor_id
            }, {
                    $set: { 'votes.$.optionNumber': optionNumber }
                })
        } else {
            Votes.update(_id, {
                $addToSet: { votes: { visitor_id: visitor_id, optionNumber: optionNumber } }
            })
        }
        Meteor.call('vote.calculate', _id)
    },
    'vote.calculate': function (_id) {
        var vote = Votes.findOne(_id);

        var voteCalculate = {
            vote_1: 0,
            vote_2: 0,
            vote_3: 0,
            vote_4: 0,
        }
        var voteCount = vote.votes.length;
        vote.votes.forEach(function (e) {
            voteCalculate['vote_' + e.optionNumber]++;
        })
        for (var p in voteCalculate) {
            voteCalculate[p] = voteCalculate[p] + '/' + voteCount
        }

        Votes.update(_id, {
            $set: voteCalculate
        })
    }
})
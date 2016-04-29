

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
    }

})
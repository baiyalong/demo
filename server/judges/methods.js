

Meteor.methods({
    'judge.insert': function (item) {
        if (this.userId)
            return Judges.insert(item);
    },
    'judge.clear': function () {
        if (this.userId)
            return Judges.remove({})
    }

})
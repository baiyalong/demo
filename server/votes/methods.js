

Meteor.methods({
    'vote.insert': function (item) {
        if (this.userId)
            return Votes.insert(item);
    },
    'vote.clear': function () {
        if (this.userId)
            return Votes.remove({})
    }
})
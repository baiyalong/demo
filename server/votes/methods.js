

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
    }
})
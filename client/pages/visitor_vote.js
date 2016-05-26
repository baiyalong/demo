
Template.visitor_vote.onCreated(function () {
    this.subscribe('votes')

})

Template.visitor_vote.onRendered(function () {

})

Template.visitor_vote.helpers({
    vote_list: function () {
        return Votes.find()
    },
    vote_hasItem: function () {
        return Votes.find().count() > 0
    },
    isAdmin: function () {
        return Meteor.user() != null || FlowRouter.getRouteName().split('.')[0] == 'admin'
    }
})

Template.visitor_vote.events({
    'change input[type="radio"]': function (e, t) {
        Meteor.call('vote.visitor_vote', e.target.name, Number(e.target.value))
    }
})
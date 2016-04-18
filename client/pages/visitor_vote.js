
Template.visitor_vote.onCreated(() => {
    Meteor.subscribe('votes')
    // Meteor.subscribe('visitors')

})

Template.visitor_vote.onRendered(() => {

})

Template.visitor_vote.helpers({
    vote_list: () => {
        return Votes.find()
    },
})

Template.visitor_vote.events({

})
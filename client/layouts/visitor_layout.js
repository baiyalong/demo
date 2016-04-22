

Template.visitor_layout.onCreated(() => {
    Meteor.subscribe('activities')
    Tracker.autorun(() => {
        var activity = Activities.findOne({ active: true })
        FlowRouter.go(activity ? activity.route : '/visitor/welcome')
    })
})

Template.visitor_layout.onRendered(() => {

})

Template.visitor_layout.helpers({

})

Template.visitor_layout.events({

})
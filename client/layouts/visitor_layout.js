

Template.visitor_layout.onCreated(function() {
    this.subscribe('activities')
    this.autorun(function() {
        var activity = Activities.findOne({ active: true })
        FlowRouter.go(activity ? activity.route : '/visitor/welcome')
    })
})

Template.visitor_layout.onRendered(function() {

})

Template.visitor_layout.helpers({

})

Template.visitor_layout.events({

})
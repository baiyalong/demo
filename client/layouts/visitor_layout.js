

Template.visitor_layout.onCreated(function () {
    this.subscribe('visitors')
    this.subscribe('activities')
    this.autorun(function () {
        var activity = Activities.findOne({ active: true })
        FlowRouter.go(activity ? activity.route : '/visitor/welcome')
    })
})

Template.visitor_layout.onRendered(function () {

})

Template.visitor_layout.helpers({
    connected: function () {
        var status = Meteor.status()
        return status ? status.connected : false;
    },
    status: function () {
        var status = Meteor.status()
        return status ? JSON.stringify(status) : '';
    },
    screen: function () {
        var visitor = Visitors.findOne();
        return visitor ? visitor.screen : false;
    }
})

Template.visitor_layout.events({
    'click #reconnect': function () {
        Meteor.reconnect()
    }
})
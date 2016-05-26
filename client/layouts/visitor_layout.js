

Template.visitor_layout.onCreated(function () {
    this.subscribe('visitors')
    this.subscribe('activities')
    this.autorun(function () {
        if (Template.instance().subscriptionsReady()) {
            var activity = Activities.findOne({ active: true })
            FlowRouter.go(activity ? activity.route : '/visitor/welcome')
        }
    })
})

Template.visitor_layout.onRendered(function () {
    this.autorun(function () {
        if (Template.instance().subscriptionsReady()) {
            var visitor = Visitors.findOne();
            Session.set('screen', visitor ? visitor.screen : true)
        }
    });
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
        var screen = Session.get('screen')
        return screen ? screen : false;
    }
})

Template.visitor_layout.events({
    'click #reconnect': function () {
        Meteor.reconnect()
    }
})
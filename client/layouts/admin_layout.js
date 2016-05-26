

Template.admin_layout.onCreated(function () {
    this.subscribe('activities')
})

Template.admin_layout.onRendered(function () {
    this.autorun(function () {
        if (Template.instance().subscriptionsReady()) {
            var user = Meteor.user();
            if (!user) FlowRouter.go('/admin/login')
        }
    })
})

Template.admin_layout.helpers({
    active: function () {
        var activity = Activities.findOne({ active: true })
        var res = {
            judge: '',
            vote: ''
        }
        if (activity)
            res[activity.name] = 'active';
        return res;
    }
})

Template.admin_layout.events({
    'click #judge': (e, t) => {
        FlowRouter.go('/admin/judge')
    },
    'click #vote': (e, t) => {
        FlowRouter.go('/admin/vote')
    }
})
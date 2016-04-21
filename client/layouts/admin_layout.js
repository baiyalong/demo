

Template.admin_layout.onCreated(() => {

})

Template.admin_layout.onRendered(() => {

})

Template.admin_layout.helpers({
    active: function () {
        var state = Session.get('active')
        var res = {
            judge: '',
            vote: ''
        }
        res[state] = 'active';
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
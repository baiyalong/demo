


Template.admin_visitors.onCreated(function() {
    Meteor.subscribe('visitors')

})

Template.admin_visitors.onRendered(function() {

})

Template.admin_visitors.helpers({
    visitor_list: function() {
        var sn = 1;
        return Visitors.find().map((e) => {
            e.sn = sn++;
            e.onlineState = e.online ? '是' : '否';
            e.roleName = {
                admin: '管理员',
                audience: '观众',
                judge: '评委'
            }[e.role];
            return e;
        });
    },

})

Template.admin_visitors.events({

})
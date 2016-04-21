


Template.admin_visitors.onCreated(() => {
    Meteor.subscribe('visitors')

})

Template.admin_visitors.onRendered(() => {

})

Template.admin_visitors.helpers({
    visitor_list: () => {
        var sn = 1;
        return Visitors.find().map((e) => {
            e.sn = sn++;
            e.onlineState = e.online ? '是' : '否';
            e.roleName = {
                admin: '管理员',
                visitor: '观众',
                judge: '评委'
            }[e.role];
            return e;
        });
    },

})

Template.admin_visitors.events({

})



Template.admin_visitors.onCreated(function () {
    this.subscribe('visitors')

})

Template.admin_visitors.onRendered(function () {

})

Template.admin_visitors.helpers({
    visitor_list: function () {
        var sn = 1;
        return Visitors.find({}, { $sort: { online: 1, role: 1 } }).map((e) => {
            e.sn = sn++;
            e.onlineState = e.online ? '是' : '否';
            e.roleName = {
                admin: '管理员',
                audience: '观众',
                judge: '评委'
            }[e.role];
            var header = e.httpHeaders ? JSON.parse(e.httpHeaders) : null;
            e.userAgent = header && header['user-agent'] ? header['user-agent'] : '';
            return e;
        });
    },

})

Template.admin_visitors.events({
    'click .visitor_remove': function (e, t) {
        Meteor.call('visitor.remove', this._id)
    }
})
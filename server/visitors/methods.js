

Meteor.methods({
    'visitor.insert': function () {
        return Visitors.insert({ connection_id: this.connection.id });
    },
    'visitor.online': function (visitor_id) {
        return Visitors.update(visitor_id, { $set: { connection_id: this.connection.id, online: true } });
    },
    'visitor.offline': function (connection_id) {
        var visitor = Visitors.findOne({ connection_id: connection_id })
        Visitors.update(visitor._id, { $set: { online: false } });
        if (visitor.role == 'admin' && Visitors.find({ role: 'admin', online: true }).count() == 0)
            Meteor.call('activity.reset')
    },
    'visitor.roleChange': function (visitor_id, role) {
        return Visitors.update(visitor_id, { $set: { role: role } });
    }
})
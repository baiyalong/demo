

Meteor.methods({
    'visitor.insert': function () {
        return Visitors.insert({ connection_id: this.connection.id });
    },
    'visitor.online': function (visitor_id) {
        return Visitors.update(visitor_id, { $set: { connection_id: this.connection.id, online: true } });
    },
    'visitor.offline': function (connection_id) {
        return Visitors.update({ connection_id: connection_id }, { $set: { online: false } });
    },
    'visitor.roleChange': function (visitor_id, role) {
        return Visitors.update(visitor_id, { $set: { role: role } });
    }
})
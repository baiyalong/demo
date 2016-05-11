

Meteor.methods({
    'visitor.insert': function () {
        var visitor_id = Visitors.insert({ connection_id: this.connection.id });
        Meteor.call('visitor.online', visitor_id);
        return visitor_id;
    },
    'visitor.online': function (visitor_id) {
        if (visitor_id && Visitors.findOne(visitor_id))
            Visitors.update(visitor_id, {
                $set: {
                    connection_id: this.connection.id,
                    online: true,
                    clientAddress: this.connection.clientAddress,
                    httpHeaders: JSON.stringify(this.connection.httpHeaders)
                }
            });
        else
            return Meteor.call('visitor.insert')
    },
    'visitor.offline': function (connection_id) {
        var visitor = Visitors.findOne({ connection_id: connection_id })
        if (visitor) {
            Visitors.update(visitor._id, { $set: { online: false } });
            if (visitor.role == 'admin' && Visitors.find({ role: 'admin', online: true }).count() == 0)
                Meteor.call('activity.reset')
        }
    },
    'visitor.roleChange': function (visitor_id, role) {
        return Visitors.update(visitor_id, { $set: { role: role } });
    },
    'visitor.random_judge': function (number) {
        Visitors.update({ role: 'judge' }, { $set: { role: 'audience' } }, { multi: true })
        var audienceCount = Visitors.find({ role: 'audience' }).count()
        number = Math.min(number, audienceCount)
        if (number) {
            if (number == audienceCount) Visitors.update({ role: 'audience' }, { $set: { role: 'judge' } }, { multi: true })
            else {
                Visitors.find({ role: { $not: 'admin' } })
                    .fetch()
                    .sort(function (a, b) {
                        return Math.random() > .5 ? -1 : 1;
                    })
                    .forEach(function (e) {
                        if (num--)
                            Visitors.update(e._id, { $set: { role: 'judge' } })
                    })
            }
        }
    }
})
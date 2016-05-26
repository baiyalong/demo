

Meteor.methods({
    'visitor.insert': function () {
        var visitor_id = Visitors.insert({ connection_id: this.connection.id });
        Meteor.call('visitor.online', visitor_id);
        return visitor_id;
    },
    'visitor.remove': function (_id) {
        Meteor.call('judge.cancel', _id)
        Meteor.call('vote.cancel', _id)
        return Visitors.remove(_id)
    },
    'visitor.screen': function (_id) {
        var visitor = Visitors.findOne(_id)
        if (visitor) {
            Meteor.call('judge.cancel', _id)
            Meteor.call('vote.cancel', _id)
            return Visitors.update(_id, { $set: { screen: !visitor.screen } })
        }
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
            Meteor.call('judge.cancel', visitor._id)
            Meteor.call('vote.cancel', visitor._id)
            if (visitor.role == 'admin' && Visitors.find({ role: 'admin', online: true }).count() == 0)
                Meteor.call('activity.reset')
        }
    },
    'visitor.roleChange': function (visitor_id, role) {
        return Visitors.update(visitor_id, { $set: { role: role } });
    },
    'visitor.random_judge': function (number) {
        Visitors.update({ role: 'judge' }, { $set: { role: 'audience' } }, { multi: true })
        var audienceCount = Visitors.find({ role: 'audience', online: true }).count()
        number = Math.min(number, audienceCount)
        if (number) {
            if (number == audienceCount) Visitors.update({ role: 'audience', online: true }, { $set: { role: 'judge' } }, { multi: true })
            else {
                Visitors.find({ role: 'audience', online: true })
                    .fetch()
                    .sort(function (a, b) {
                        return Math.random() > .5 ? -1 : 1;
                    })
                    .forEach(function (e) {
                        if (number--)
                            Visitors.update(e._id, { $set: { role: 'judge' } })
                    })
            }
        }
    }
})
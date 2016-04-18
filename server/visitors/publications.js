
Meteor.publish('visitors', function () {
    if (this.userId)
        return Visitors.find({}, { sort: { online: 1, role: 1 } });
    else
        return Visitors.find({ connection_id: this.connection.id })
})


Meteor.onConnection(function (connection) {
    connection.onClose(function () {
        Meteor.call('visitor.offline', connection.id);
    })
})

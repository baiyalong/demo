

Meteor.onConnection(function (connection) {
    connection.onClose(() => {
        Meteor.call('visitor.offline', connection.id)
    })
})
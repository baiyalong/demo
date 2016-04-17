import { Meteor } from 'meteor/meteor'
import { update } from '../../api/visitors/methods.js'


Meteor.onConnection(function (connection) {
    connection.onClose(() => {
        Meteor.call('visitor.offline', connection.id)
    })
})
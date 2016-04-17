import { Meteor } from 'meteor/meteor'

import { Visitors } from './visitors.js'



Meteor.publish('visitors', function () {
    if (this.userId)
        return Visitors.find({}, { sort: { online: 1, role: 1 } });
})
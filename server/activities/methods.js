

Meteor.methods({
    'activity.active': function (name) {
        if (this.userId)
            Activities.find().forEach((e) => {
                var active = name && e.name == name ? true : false;
                Activities.update(e._id, { $set: { active: active } })
            })
    },
    'activity.active_judge': function () {
        Meteor.call('activity.active', 'judge')
    },
    'activity.active_vote': function () {
        Meteor.call('activity.active', 'vote')
    },
    'activity.reset': function () {
        Meteor.call('activity.active')
    },

})

// const active_activity = function (name) {
//     Activities.find().forEach((e) => {
//         var active = name && e.name == name ? true : false;
//         Activities.update(e._id, { $set: { active: active } })
//     })
// }





Template.admin_vote.onCreated(function () {


})

Template.admin_vote.onRendered(function () {
    Meteor.call('activity.active_vote')
})

Template.admin_vote.helpers({

})

Template.admin_vote.events({
    'click #vote_addItem': (e, t) => {
        t.$('#vote_newItemModal').modal()
    },
    'click #vote_cancelItem': (e, t) => { },
    'click #vote_saveItem': (e, t) => {
        var item = {
            title: t.$('#title').val(),
            option_1: t.$('#option_1').val(),
            option_2: t.$('#option_2').val(),
            option_3: t.$('#option_3').val(),
            option_4: t.$('#option_4').val(),
        }
        Meteor.call('vote.insert', item, (err, res) => {
            if (err) console.log(err)
            else t.$('#vote_newItemModal').modal('hide')
        })
    },
    'click #vote_stop': function () {
        Meteor.call('activity.active_vote')
    },
    'click #vote_reset': function () {
        Meteor.call('activity.reset')
        Meteor.call('vote.clear')
    }, 
    'click #vote_removeItem': function (e, t) {
        Meteor.call('vote.remove', this._id)
    }
})
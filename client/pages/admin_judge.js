


Template.admin_judge.onCreated(function () {


})

Template.admin_judge.onRendered(function () {
    Meteor.call('activity.active_judge')
})

Template.admin_judge.helpers({

})

Template.admin_judge.events({
    'click #judge_addItem': (e, t) => {
        t.$('#judge_newItemModal').modal()
    },
    'click #judge_cancelItem': (e, t) => { },
    'click #judge_saveItem': (e, t) => {
        var item = {
            title: t.$('#title').val(),
            player_1: t.$('#player_1').val(),
            player_2: t.$('#player_2').val(),
            player_3: t.$('#player_3').val(),
        }
        Meteor.call('judge.insert', item, (err, res) => {
            if (err) console.log(err)
            else t.$('#judge_newItemModal').modal('hide')
        })
    },
    'click #judge_random': (e, t) => {
        t.$('#judge_randomNumber').val('')
        t.$('#judge_randomModal').modal()
    },
    'click #judge_cancelRandom': (e, t) => { },
    'click #judge_saveRandom': (e, t) => {
        var number = t.$('#judge_randomNumber').val()
        if (isNaN(number)) number = 0;
        number = Math.max(number, 0)
        Meteor.call('visitor.random_judge', number, (err, res) => {
            if (err) console.log(err)
            else t.$('#judge_randomModal').modal('hide')
        })
    },
    'click #judge_stop': function () {
        Meteor.call('activity.active_judge')
    },
    'click #judge_reset': function () {
        Meteor.call('activity.reset')
        Meteor.call('judge.clear')
    },
    'click #judge_removeItem': function (e, t) {
        Meteor.call('judge.remove', this._id)
    }
})
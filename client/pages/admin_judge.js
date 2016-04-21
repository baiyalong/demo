


Template.admin_judge.onCreated(() => {


})

Template.admin_judge.onRendered(() => {
    Session.set('active', 'judge')
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
        t.$('#judge_randomModal').modal()
    },
    'click #judge_cancelRandom': (e, t) => { },
    'click #judge_saveRandom': (e, t) => {
        var number = t.$('#judge_randomNumber').val()
        console.log(number)
    },
    'click #judge_stop': () => {
        Meteor.call('activity.active_judge')
    },
    'click #judge_reset': () => {
        Meteor.call('activity.reset')
        Meteor.call('judge.clear')
    }
})
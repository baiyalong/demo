


Template.admin_judge.onCreated(() => {


})

Template.admin_judge.onRendered(() => {

})

Template.admin_judge.helpers({

})

Template.admin_judge.events({
    'click #saveItem': (e, t) => {
        var item = {
            title: t.$('#title').val(),
            player_1: t.$('#player_1').val(),
            player_2: t.$('#player_2').val(),
            player_3: t.$('#player_3').val(),
        }
        Meteor.call('judge.insert', item, displayError)
    },
    'click #active_judge':()=>{
        Meteor.call('activity.active_judge')
    },
    'click #active_reset':()=>{
        Meteor.call('activity.reset')
        Meteor.call('judge.clear')
    }
})
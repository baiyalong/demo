


Template.admin_vote.onCreated(() => {


})

Template.admin_vote.onRendered(() => {

})

Template.admin_vote.helpers({

})

Template.admin_vote.events({
    'click #saveItem': (e, t) => {
        var item = {
            title: t.$('#title').val(),
            option_1: t.$('#option_1').val(),
            option_2: t.$('#option_2').val(),
            option_3: t.$('#option_3').val(),
            option_4: t.$('#option_4').val(),
        }
        Meteor.call('vote.insert', item, displayError)
    },
    'click #active_vote': () => {
        Meteor.call('activity.active_vote')
    },
    'click #active_reset': () => {
        Meteor.call('activity.reset')
        Meteor.call('vote.clear')
    }
})
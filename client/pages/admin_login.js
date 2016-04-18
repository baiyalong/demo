

Template.admin_login.onCreated(() => {


})

Template.admin_login.onRendered(() => {

})

Template.admin_login.helpers({

})

Template.admin_login.events({
    'click #login': (e, t) => {
        var username = t.$('#username').val()
        var password = t.$('#password').val()
        Meteor.loginWithPassword(username, password, (err, res) => {
            if (err) displayError(err)
            else FlowRouter.go('/admin/judge')
        })
    }
})
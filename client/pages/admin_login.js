

Template.admin_login.onCreated(() => {


})

Template.admin_login.onRendered(() => {

})

Template.admin_login.helpers({
    err: function () {
        return Session.get('err')
    }
})

Template.admin_login.events({
    'click #login': (e, t) => {
        e.preventDefault()
        var username = t.$('#username').val()
        var password = t.$('#password').val()
        Meteor.loginWithPassword(username, password, (err, res) => {
            if (err) {
                Session.set('err', err.message)
                console.log(err)
            }
            else {
                Session.set('err', null)
                Meteor.logoutOtherClients((err) => {
                    if (err) console.log(err)
                    else FlowRouter.go('/admin/judge')
                })
            }
        })
    }
})
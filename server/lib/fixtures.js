
Meteor.startup(function() {
    
    if (!Meteor.users || Meteor.users.find().count() == 0) {
        var userId = Accounts.createUser({ username: 'admin', password: 'qwe' })
    }


    var activities = [{ name: 'judge', route: '/visitor/judge' }, { name: 'vote', route: '/visitor/vote' }]
    activities.forEach(function(e) {
        if (!Activities.findOne(e))
            Activities.insert(e)
    })
    
    
})
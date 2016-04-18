
Meteor.startup(() => {
    
    if (!Meteor.users || Meteor.users.find().count() == 0) {
        var userId = Accounts.createUser({ username: 'admin', password: 'qwe' })
        console.log('userId ', userId)
    }


    var activities = [{ name: 'judge', route: '/visitor/judge' }, { name: 'vote', route: '/visitor/vote' }]
    activities.forEach((e) => {
        if (!Activities.findOne(e))
            Activities.insert(e)
    })
    
    
})
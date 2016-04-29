Meteor.startup(function () {


    //visitor online
    var visitor_id = localStorage.visitor_id;
    if (!visitor_id) {
        Meteor.call('visitor.insert', (err, res) => {
            if (err) displayError(err);
            else if (res) localStorage.visitor_id = res;
        })
    } else {
        Meteor.call('visitor.online', visitor_id, displayError);
    }

    //visitor role
    Tracker.autorun(function () {
        var user = Meteor.user();
        if (user)
            Meteor.call('visitor.roleChange', visitor_id, 'admin', displayError)
    })

})
Meteor.startup(function () {


    //visitor online
    var visitor_id = localStorage.visitor_id;
    Meteor.call('visitor.online', visitor_id, function (err, res) {
        if (err) displayError(err);
        else if (res) localStorage.visitor_id = res;
    });

    //visitor role
    Tracker.autorun(function () {
        var user = Meteor.user();
        if (user)
            Meteor.call('visitor.roleChange', visitor_id, 'admin', displayError)
    })

    // //connection status
    // const retryTimes = 10;
    // Tracker.autorun(function () {
    //     var status = Meteor.status();
    //     if (status.connected == false && status.retryCount < retryTimes)
    //         Meteor.reconnect()
    // })

})
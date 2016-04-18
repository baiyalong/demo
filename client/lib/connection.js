Meteor.startup(() => {


    //visitor online
    var visitor_id = localStorage.visitor_id;
    if (!visitor_id) {
        Meteor.call('visitor.insert', (err, res) => {
            if (err) displayError(err);
            else if (res) localStorage.visitor_id = res;
        })
    } else {
        Meteor.call('visitor.online', visitor_id, displayError)
    }

    //visitor role
    var role = Meteor.userId ? 'admin' : 'audience';
    Meteor.call('visitor.roleChange', visitor_id, role, displayError)




})
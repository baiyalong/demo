


Template.admin_visitors.onCreated(() => {
    Meteor.subscribe('visitors')

})

Template.admin_visitors.onRendered(() => {

})

Template.admin_visitors.helpers({
    visitor_list: () => {
        return Visitors.find();
    },
    online_helper: (bool) => {
        return bool ? '是' : '否';
    }
})

Template.admin_visitors.events({

})
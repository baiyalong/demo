
Template.visitor_judge.onCreated(() => {
    Meteor.subscribe('judges')
    Meteor.subscribe('visitors')

})

Template.visitor_judge.onRendered(() => {

})

Template.visitor_judge.helpers({
    judge_list: () => {
        return Judges.find()
    },
    role_is_judge: () => {
        // return Visitors.findOne().role == 'judge';
        return true;
    }
})

Template.visitor_judge.events({

})
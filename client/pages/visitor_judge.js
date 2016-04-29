
Template.visitor_judge.onCreated(function () {
    Meteor.subscribe('judges')
    Meteor.subscribe('visitors')

})

Template.visitor_judge.onRendered(function () {

})

Template.visitor_judge.helpers({
    judge_list: function () {
        return Judges.find()
    },
    role_is_judge: function () {
        var visitor = Visitors.findOne()
        return visitor && visitor.role == 'judge';
    },
    judge_hasItem: function () {
        return Judges.find().count() > 0
    },
    isAdmin: function () {
        return Meteor.user() != null && FlowRouter.getRouteName().split('.')[0] == 'admin'
    },
    myJudge: function () {
        return Session.get('myJudge') || 0;
    }

})

Template.visitor_judge.events({
    'change input[type="range"]': function (e, t) {
        Session.set('myJudge', e.target.value)
    }
})
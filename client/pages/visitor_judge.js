
Template.visitor_judge.onCreated(function () {
    this.subscribe('judges')
    this.subscribe('visitors')

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
        // return !(Meteor.user() != null && FlowRouter.getRouteName().split('.')[0] == 'admin');//test
    },
    judge_hasItem: function () {
        return Judges.find().count() > 0
    },
    isAdmin: function () {
        return Meteor.user() != null && FlowRouter.getRouteName().split('.')[0] == 'admin'
    },

})

Template.visitor_judge.events({
    'change input[type="range"]': function (e, t) {
        var score = e.target.value;
        e.target.previousSibling.textContent = score;
        Meteor.call('judge.visitor_judge', this._id, score);
    }
})
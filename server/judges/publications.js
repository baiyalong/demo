
Meteor.publish('judges', function () {
    return Judges.find();
})
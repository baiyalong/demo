

import './visitor_welcome.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';

// import '../components/loading.js';
import '../lib/compatibility.js';
import { displayError } from '../lib/errors.js';
// import '../../server/visitors/methods.js';


Template.visitor_welcome.onCreated(() => {
    var visitor_id = localStorage.visitor_id;
    if (!visitor_id) {
        Meteor.call('visitor.insert', (err, res) => {
            if (err) displayError(err);
            else if (res) localStorage.visitor_id = res;
        })
    } else {
        Meteor.call('visitor.online', visitor_id, displayError)
    }

})

Template.visitor_welcome.onRendered(() => {

})

Template.visitor_welcome.helpers({

})

Template.visitor_welcome.events({

})
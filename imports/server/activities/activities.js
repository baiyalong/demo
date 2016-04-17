import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const Activities = new Mongo.Collection('Activities');

// Deny all client-side updates since we will be using methods to manage this collection
Activities.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Activities.schema = new SimpleSchema({
    name: { type: String },
    active: { type: Boolean, defaultValue: false },
    route: { type: String }
});

Activities.attachSchema(Activities.schema);


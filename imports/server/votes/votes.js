import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const Votes = new Mongo.Collection('Votes');

// Deny all client-side updates since we will be using methods to manage this collection
Votes.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Votes.schema = new SimpleSchema({
    title: { type: String },
    options: { type: [Object] },
    "options.$.name": {
        type: String
    },
    "options.$.score": {
        type: Number
    },
    option_final: { type: String, optional: true },
});

Votes.attachSchema(Votes.schema);


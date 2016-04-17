import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';



export const Judges = new Mongo.Collection('Judges');

// Deny all client-side updates since we will be using methods to manage this collection
Judges.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Judges.schema = new SimpleSchema({
    title: { type: String },
    player_1: { type: String },
    player_2: { type: String, optional: true },
    player_3: { type: String, optional: true },
    scores: { type: [Number] },
    score_final: { type: Number, defaultValue: 0, min: 0, max: 100 },
});

Judges.attachSchema(Judges.schema);


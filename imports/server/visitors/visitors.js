import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const Visitors = new Mongo.Collection('Visitors');

Visitors.allow({
  // insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Visitors.schema = new SimpleSchema({
  connection_id: { type: String },
  online: { type: Boolean, defaultValue: true },
  role: { type: String, defaultValue: 'audience' }
});

Visitors.attachSchema(Visitors.schema);


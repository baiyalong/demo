

Visitors.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Visitors.schema = new SimpleSchema({
  connection_id: { type: String },
  online: { type: Boolean, defaultValue: true },
  screen: { type: Boolean, defaultValue: false },
  role: { type: String, defaultValue: 'audience' },
  clientAddress: { type: String, optional: true },
  httpHeaders: { type: String, optional: true }
});

Visitors.attachSchema(Visitors.schema);


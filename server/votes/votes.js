

// Deny all client-side updates since we will be using methods to manage this collection
Votes.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Votes.schema = new SimpleSchema({
    title: { type: String },
    option_1: { type: String },
    option_2: { type: String },
    option_3: { type: String, optional: true },
    option_4: { type: String, optional: true },
    vote_1: { type: String, optional: true },
    vote_2: { type: String, optional: true },
    vote_3: { type: String, optional: true },
    vote_4: { type: String, optional: true },
    votes: { type: [Object], defaultValue: [] },
    "votes.$.visitor_id": {
        type: String
    },
    "votes.$.optionNumber": {
        type: Number
    },
    option_final: { type: String, optional: true },
});

Votes.attachSchema(Votes.schema);


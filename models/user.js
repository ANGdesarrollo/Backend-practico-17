const { Schema, model } = require("mongoose");

const schemaUser = new Schema({
    username: { type: String, required: true, max: 50 },
    password: { type: String, required: true, max: 50}
})

module.exports = model('user', schemaUser);

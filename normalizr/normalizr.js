const { normalize, schema } = require('normalizr');

const authorSchema = new schema.Entity('authors', {}, {idAttribute: 'email'});
const messageSchema = new schema.Entity("messages", {
    author: authorSchema
});

const chatSchema = new schema.Entity("chats", {
    messages: [messageSchema]
})

exports.normalizedData = (data) => {
    return normalize({id: "chatHistory", messages: data}, chatSchema)
}

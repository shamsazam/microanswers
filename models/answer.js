const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const answerSchema = new mongoose.Schema({
    body: { type: String, required: true },
    question: { type: ObjectId, ref: 'Question', required: true },
    author: { type: ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Answer', answerSchema);
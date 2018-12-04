const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: ObjectId, ref: 'User', required: true },
    answers: [{ type: ObjectId, ref: 'Answer', }]
});

module.exports = mongoose.model('Question', questionSchema);
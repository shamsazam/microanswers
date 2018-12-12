const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const questionSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    author: { type: ObjectId, ref: 'User', required: true },
    likedBy: [String]
});

questionSchema.virtual('answers', { ref: 'Answer', localField: '_id', foreignField: 'question' });

module.exports = mongoose.model('Question', questionSchema);
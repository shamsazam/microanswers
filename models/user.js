const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.virtual('questions', { ref: 'Question', localField: '_id', foreignField: 'author' });
userSchema.virtual('answers', { ref: 'Answer', localField: '_id', foreignField: 'author' });

module.exports = mongoose.model('User', userSchema);
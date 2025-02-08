const mongoose = require('mongoose');
const feedSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        default: ''
    },
    image: {
        type: [String],
        default: []
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [String],
        default: []
    },
    category: {
        type: String,
        enum: ['General', 'Art', 'Literature', 'Science', 'Music'],
        required: true
    }
});

module.exports = mongoose.model('Feed', feedSchema);

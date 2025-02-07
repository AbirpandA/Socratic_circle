const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
    },
    teach: [{
        type: String,
        index: true, // Optimizes queries filtering by teach tags
    }],
    learn: [{
        type: String,
        index: true, // Optimizes queries filtering by learn tags
    }],
    connections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
    }],
    askedQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        default: [],
    }],
    skillPoints: {
        type: Number,
        default: 5,
    },
    sessions: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        default: [],
    }],
}, { timestamps: true }); // Automatically adds createdAt & updatedAt fields

module.exports = mongoose.model('User', userSchema);

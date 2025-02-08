const express = require('express');
const mongoose = require('mongoose');
const feedRoute = express.Router();
const Feed = require('../Schema/Feed');
const User = require('../Schema/userschema');

// ✅ **POST: Create a new feed post**
feedRoute.post('/feed', async (req, res) => {
    try {
        const { user, text, videoUrl, image, category } = req.body;

        // 🔹 Validate required fields
        if (!user || !text || !category) {
            return res.status(400).json({ error: "User ID, text, and category are required" });
        }

        // 🔹 Check if the user exists
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found. Please register first." });
        }

        // 🔹 Validate category value
        const validCategories = ['General', 'Art', 'Literature', 'Science', 'Music'];
        if (!validCategories.includes(category)) {
            return res.status(400).json({ error: `Invalid category. Choose from: ${validCategories.join(', ')}` });
        }

        // 🔹 Create and save the feed post
        const newFeed = new Feed({
            user,
            text,
            videoUrl: videoUrl || "",
            image: Array.isArray(image) ? image : [],
            category,  // ✅ Include category
        });

        await newFeed.save();

        // 🔹 Add post ID to the user's posts array
        await User.findByIdAndUpdate(user, { $push: { posts: newFeed._id } });

        // 🔹 Populate user details in response
        const savedFeed = await Feed.findById(newFeed._id).populate('user', 'username email');

        res.status(201).json(savedFeed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// ✅ **GET: Fetch all feed posts with user details**
feedRoute.get('/feed', async (req, res) => {
    try {
        const feeds = await Feed.find().populate('user', 'username email');
        res.json(feeds);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ **GET: Fetch a single feed post by ID**
feedRoute.get('/feed/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // 🔹 Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid post ID" });
        }

        const feed = await Feed.findById(id).populate('user', 'username email');
        if (!feed) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(feed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ **PATCH: Like a feed post**
feedRoute.patch('/feed/:id/like', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid post ID" });
        }

        const updatedFeed = await Feed.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });

        if (!updatedFeed) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(updatedFeed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ **POST: Add a comment to a feed post**
feedRoute.post('/feed/:id/comment', async (req, res) => {
    try {
        const { id } = req.params;
        const { user, text } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(user)) {
            return res.status(400).json({ error: "Invalid post or user ID" });
        }

        if (!text) {
            return res.status(400).json({ error: "Comment text is required" });
        }

        const feed = await Feed.findById(id);
        if (!feed) {
            return res.status(404).json({ error: "Post not found" });
        }

        feed.comments.push({ user, text });
        await feed.save();

        res.status(201).json(feed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ **DELETE: Remove a feed post**
feedRoute.delete('/feed/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid post ID" });
        }

        const deletedFeed = await Feed.findByIdAndDelete(id);
        if (!deletedFeed) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = feedRoute;

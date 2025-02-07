const express = require('express');
const feedRoute = express.Router();
const Feed = require('../Schema/Feed');
const User = require('../Schema/userschema')

// **POST a new feed post (Only if the user exists)**
feedRoute.post('/feed', async (req, res) => {
    try {
        const { user, text, videoUrl, image } = req.body;

        // Validate request
        if (!user || !text) {
            return res.status(400).json({ error: "User ID and text are required" });
        }

        // Verify if the user exists
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found. Please register first." });
        }

        // Create and save the new feed post
        const newFeed = new Feed({
            user,
            text,
            videoUrl: videoUrl || "",
            image: image || []
        });

        await newFeed.save();

        // Update the user's posts array
        await User.findByIdAndUpdate(user, { $push: { posts: newFeed._id } });

        // Populate user details in response
        const savedFeed = await Feed.findById(newFeed._id).populate('user', 'username email');

        res.status(201).json(savedFeed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// **GET all feeds with user details**
feedRoute.get('/feed', async (req, res) => {
    try {
        const feeds = await Feed.find().populate('user', 'name email');  // Populating user details
        res.json(feeds);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = feedRoute;

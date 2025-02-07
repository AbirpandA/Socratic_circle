const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const http = require('http');
const socketIo = require('socket.io');
const Inquiry = require('../models/Inquiry');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

const inquirySchema = new mongoose.Schema({
  question: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a new post
router.post('/posts', async (req, res) => {
  const { title, content, author } = req.body;
  const post = new Post({ title, content, author });
  await post.save();
  res.status(201).json(post);
});

// Get all posts
router.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

// Submit a new inquiry
router.post('/inquiries', async (req, res) => {
  const { question, user } = req.body;
  const inquiry = new Inquiry({ question, user });
  await inquiry.save();
  res.status(201).json(inquiry);
});

// Get all inquiries
router.get('/inquiries', async (req, res) => {
  const inquiries = await Inquiry.find().populate('user');
  res.json(inquiries);
});

// Additional routes for updating and deleting posts can be added here

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = router;

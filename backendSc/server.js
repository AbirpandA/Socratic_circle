// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./Routes/userRoutes');
const inquireRoute = require('./Routes/inquireRoutes');
const feedRoute = require('./Routes/feedRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MongoDbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic test rozz
app.get('/', (req, res) => {
  res.send('Social Media API is running');
});

app.use('/api/users', userRoute);
app.use('/api/inquire', inquireRoute);
app.use('/api/posts', feedRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { Ollama } from '@langchain/ollama';
import userRoute from './Routes/userRoutes.js';
import inquireRoute from './Routes/inquireRoutes.js';
import feedRoute from './Routes/feedRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MongoDbURI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
      console.error('❌ MongoDB connection error:', err);
      process.exit(1);
  });

// Basic Test Route
app.get('/', (req, res) => {
  res.send('Social Media API is running');
});

// Routes
app.use('/api/users', userRoute);
app.use('/api/inquire', inquireRoute);
app.use('/api/posts', feedRoute);

const model = new Ollama({
    // baseUrl: "http://api.example.com",  // Replace with actual API URL if needed
    model: "llama3"
});

app.post("/chat", async (req, res) => {
  try {
      const { question } = req.body;

      if (!question || question.trim() === "") {
          return res.status(400).json({ error: "Question cannot be empty!" });
      }

      const stream = await model.stream(
          `You are a helpful assistant. Answer the following question concisely.\n\nQuestion: ${question}\n\nAnswer:`
      );

      let responseText = "";
      for await (const chunk of stream) {
          if (typeof chunk === "string") {
              responseText += chunk;  // Append text correctly
          } else if (chunk && chunk.text) {
              responseText += chunk.text;  // Handle object-based chunks
          }
      }

      if (!responseText.trim()) {
          return res.status(500).json({ error: "No response received from the model!" });
      }

      res.json({ response: responseText.trim() });
  } catch (error) {
      console.error("Chatbot Error:", error);
      res.status(500).json({ error: "Something went wrong!" });
  }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

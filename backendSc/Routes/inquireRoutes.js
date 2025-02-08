const express = require("express");
const inquireRoute = express.Router();
const Category = require("../Schema/categorySchema");
const Question = require("../Schema/questionSchema");

// Get all categories with questions
inquireRoute.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find().populate("questions");
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new category
inquireRoute.post("/categories", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }
    const newCategory = new Category({ name, questions: [] });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get questions by category
inquireRoute.get("/questions/:categoryId", async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId)
      .populate({
        path: "questions",
        select: "-__v"  // Exclude only __v field
      });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    console.log("Retrieved Questions:", category.questions); // Debugging log

    res.json(category.questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


inquireRoute.post("/questions", async (req, res) => {
  try {
    console.log("Received Request Body:", req.body); // Debugging log

    const { category, questionText, author, avatar, topic, timeAgo, references, type } = req.body;
    
    if (!category || !questionText || !author || !topic || !timeAgo || !type) {
      return res.status(400).json({ error: "All required fields must be provided" });
    }

    // Create a new question with all fields
    const newQuestion = new Question({ 
      category, 
      questionText, 
      author, 
      avatar, 
      topic, 
      timeAgo, 
      references, 
      type 
    });

    await newQuestion.save();

    // Add question to category's question list
    await Category.findByIdAndUpdate(category, { $push: { questions: newQuestion._id } });

    console.log("Saved Question:", newQuestion); // Debugging log

    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = inquireRoute;

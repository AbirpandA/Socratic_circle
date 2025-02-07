const express = require("express");
const inquireRoute = express.Router();
// const Category = require("../Schema/Category");
// const Question = require("../Schema/Question");
const Category = require('../Schema/categorySchema');
const Question = require('../Schema/questionSchema');

// Get all categories
inquireRoute.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

inquireRoute.post("/categories", async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
          return res.status(400).json({ error: "Category name is required" });
        }
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json(newCategory);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})


// Get questions by category
inquireRoute.get("/questions/:categoryId", async (req, res) => {
    try {
      const category = await Category.findById(req.params.categoryId).populate("questions");
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(category.questions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Post a new question inside a category
inquireRoute.post("/questions", async (req, res) => {
    try {
      const { category, questionText } = req.body;
      if (!category || !questionText) {
        return res.status(400).json({ error: "Category and questionText are required" });
      }
  
      // Create a new question
      const newQuestion = new Question({ category, questionText });
      await newQuestion.save();
  
      // Add question to category's question list
      await Category.findByIdAndUpdate(category, { $push: { questions: newQuestion._id } });
  
      res.status(201).json(newQuestion);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = inquireRoute;

const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  questionText: { type: String, required: true },
});

module.exports = mongoose.model("Question", QuestionSchema);

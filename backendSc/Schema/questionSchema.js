const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  questionText: { type: String, required: true },
  author: { type: String, required: true },
  avatar: { type: String, default: "" },
  topic: { type: String, required: true },
  responses: { type: Number, default: 0 },
  contemplations: { type: Number, default: 0 },
  timeAgo: { type: String, required: true },
  references: [{ type: String }],
  type: { type: String, enum: ["inquiry", "discussion"], required: true }
});

module.exports = mongoose.model("Question", QuestionSchema);

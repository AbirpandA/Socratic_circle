const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }]
});

module.exports = mongoose.model("Category", CategorySchema);

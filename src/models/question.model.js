const mongoose = require('mongoose');

const { Schema } = mongoose;

const leetQuestionSchema = new Schema({
  constraints: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
});

const leetQuestion = mongoose.model('LeetQuestion', leetQuestionSchema);

export default leetQuestion;

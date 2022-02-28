const mongoose = require('mongoose');

const { Schema } = mongoose;

const leetQuestionSchema = new Schema({
  acceptedSolutions: {
    type: Number,
    required: true,
  },
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
  submissions: {
    type: Number,
    required: true,
  },
});

const leetQuestion = mongoose.model('LeetQuestion', leetQuestionSchema);

export default leetQuestion;

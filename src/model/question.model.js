const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  pattern: {
    type: Array,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    required: true,
  },
  companies: {
    type: Array,
    required: true,
  },
});

const questionData = mongoose.model('Question', questionSchema, 'QuestionData');
module.exports = questionData;

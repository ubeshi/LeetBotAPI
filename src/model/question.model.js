const questions = require('../questions.json');

const questionData = {
  find: async (params) => {
    if (params) {
      const { id } = params;
      return questions.find((question) => `${question.id}` === id);
    }
    return questions;
  },
};

module.exports = questionData;

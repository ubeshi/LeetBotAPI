const cors = require('cors');
const express = require('express');
const questionData = require('./model/question.model');

require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  await questionData.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error: ${err}`);
    });
});

app.get('/:id', async (req, res) => {
  await questionData.find({ id: req.params.id })
    .then((question) => {
      res.status(200).json(question);
    })
    .catch((err) => {
      res.status(400).send(`Error: ${err}`);
    });
});

app.listen(PORT);

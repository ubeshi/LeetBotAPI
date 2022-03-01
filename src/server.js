const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const questionData = require('./model/question.model');

require('dotenv').config();

const { URI, PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(URI);

app.get('/', async (req, res) => {
  await questionData.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error: ${err}`);
    });
});

app.listen(PORT);

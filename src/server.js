const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const { URI, PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(URI);

app.listen(PORT);

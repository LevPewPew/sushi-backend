const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

const DB_URL = process.env.DB_URL;
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(DB_URL, dbConfig, (err) => {
  if(err) {
    console.log("MongooseDB Connection Error");
  } else {
    console.log("Connected to MongooseDB");
  }
});

app.use(express.json());

// connect with index.js file in routes directory
app.use(cors({
  origin: "https://nervous-brown-9c361c.netlify.com"
  // origin: "localhost:3000"
}));
app.use(require('./routes/index'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
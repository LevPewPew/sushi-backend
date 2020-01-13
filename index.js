const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
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

app.use(morgan('dev'));
app.use(express.json());
// TODO modify this to use a .env and deploy in heroku with added .env var (also modify my steps notes if this is possible)
app.use(cors({
  // origin: 'http://localhost:3000';
  origin: 'https://sushi-dev-portal.netlify.com'
}));
// connect with index.js file in routes directory
app.use(require('./routes/index'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
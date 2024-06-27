// Require dotenv and configure it to load variables from .env file
require('dotenv').config();

const mongoose = require("mongoose");

const connectDB = () => {
  const url = process.env.MONGODB_URI; // Get the MongoDB URI from environment variables

  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.error('Error connecting to DB:', err);
  });
};

module.exports = connectDB;

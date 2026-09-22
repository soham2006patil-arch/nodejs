const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const isPlaceholderMongoUri = (uri) => {
  if (!uri) return true;
  return /<username>|<password>|cluster0\.example\.mongodb\.net/i.test(uri);
};

app.use(express.json());
app.use('/', authRoutes);

const startServer = async () => {
  if (!process.env.MONGO_URI || isPlaceholderMongoUri(process.env.MONGO_URI)) {
    console.error(
      'MONGO_URI is missing or still contains placeholder values. Please update the .env file with your real MongoDB Atlas connection string.'
    );
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

startServer();

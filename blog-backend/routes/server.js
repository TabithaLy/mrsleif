const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); 

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the blog backend!');
});

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mrsleif2fangsDB')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err => {
    console.error('Connection error', err);
  });
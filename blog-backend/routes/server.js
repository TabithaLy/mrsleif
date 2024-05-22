const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mrsleif2fangsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Define the schema for your collection
const postSchema = new mongoose.Schema({
  // Define the schema fields here
  title: String,
  author: String,
  publisher: String,
  fangs: String
});

// Define the model using the schema
const Post = mongoose.model('Post', postSchema);

// Routes for posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
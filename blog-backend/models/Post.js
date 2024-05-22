const mongoose = require('mongoose');

// Define the schema for the Post collection
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    sinopsis: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    cliffhanger: {
        type: String,
        required: true,
    },
    fangs: {
        type: String,
        required: true,
    },
    amazonLink: {
        type: String,
        required: true,
    },
    barnesNobleLink: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Create the model for the Post collection
const Post = mongoose.model('Post', postSchema);

// Export the Post model
module.exports = Post;
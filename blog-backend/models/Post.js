const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
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
    imageS: {
        type: String,
        default: '..blog-frontend/src/components/utils/images/mrslefSinopsis.jpg', // Replace with actual path
    },
    sinopsis: {
        type: String,
        required: true,
    },
    imageR: {
        type: String,
        default: '..blog-frontend/src/components/utils/images/mrslefReview.jpg', // Replace with actual path
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
    },
    barnesNobleLink: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'mrsleifPosts' });

// Create the model for the Post collection
const Post = mongoose.model('Post', postSchema);

// Export the Post model
module.exports = Post;
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const path = require('path');
const authMiddleware = require('../middleware/authMiddleware');

// Adjust the paths to require the utility functions
const generateAmazonLink = require(path.join(__dirname, '../../blog-frontend/src/components/utils/generateAmazonLink')).generateAmazonLink;
const generateBarnesNobleLink = require(path.join(__dirname, '../../blog-frontend/src/components/utils/generateBarnesNobleLink')).generateBarnesNobleLink;

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create a new post
router.post('/', authMiddleware, async (req, res) => {
    const post = new Post({
        image: req.body.image,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        imageS: '..blog-frontend/src/components/utils/images/mrslefSinopsis.jpg',
        sinopsis: req.body.sinopsis,
        imageR: '..blog-frontend/src/components/utils/images/mrslefReview.jpg',
        review: req.body.review,
        cliffhanger: req.body.cliffhanger,
        fangs: req.body.fangs,
        amazonLink: generateAmazonLink(req.body.title, req.body.author),
        barnesNobleLink: generateBarnesNobleLink(req.body.title, req.body.author),
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update a post
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.image = req.body.image || post.image;
        post.title = req.body.title || post.title;
        post.author = req.body.author || post.author;
        post.publisher = req.body.publisher || post.publisher;
        post.sinopsis = req.body.sinopsis || post.sinopsis;
        post.review = req.body.review || post.review;
        post.cliffhanger = req.body.cliffhanger || post.cliffhanger;
        post.fangs = req.body.fangs || post.fangs;

        // Regenerate links if title or author has changed
        if (req.body.title || req.body.author) {
            post.amazonLink = generateAmazonLink(post.title, post.author);
            post.barnesNobleLink = generateBarnesNobleLink(post.title, post.author);
        }

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE delete a post
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await post.remove();
        res.json({ message: 'Post deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
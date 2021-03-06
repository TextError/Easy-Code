const express = require('express');
const router = express.Router();

//Post model
const Post = require('../../models/Post');

//Validator
const validatePostInput = require('../../validation/post');

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post ({
    text: req.body.text
  });

  newPost.save().then(post => res.json(post));
});

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/', (req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json({ no_post_found: 'No posts found!' }))
});

module.exports = router;
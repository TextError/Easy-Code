const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
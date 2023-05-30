const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    numberOfViews: {
      type: Number,
      default: 0,
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    dislikes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    isLike: {
      type: Boolean,
      default: false,
    },
    isDislike: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default:
        'https://media.istockphoto.com/id/1448693853/photo/img_0733-chinchon-at-night.jpg?s=612x612&w=is&k=20&c=naI90nnAgZvtJ7pu2aUqv1KG5TnS0aub8ARxFUnjVAI=',
    },
    author: {
      type: String,
      default: 'admin',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

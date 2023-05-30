const mongoose = require('mongoose');

const BlogCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index:true
  },
},
{
  timestamps: true,
}

);

const BlogCategory = mongoose.model('BlogCategory', BlogCategorySchema);

module.exports = BlogCategory;

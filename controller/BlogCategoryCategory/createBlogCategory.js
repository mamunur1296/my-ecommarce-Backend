const BlogCategory = require("../../model/BlogCategoryModel");


// Create a new blog category
const createBlogCategory = async (req, res) => {
    try {
      const { name } = req.body;
  
      // Create the blog category
      const blogCategory = await BlogCategory.create({ name });
  
      // Return the newly created blog category
      return res.status(201).json(blogCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {
    createBlogCategory
  };
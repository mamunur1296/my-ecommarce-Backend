const BlogCategory = require("../../model/BlogCategoryModel");

// Get all blog categories
const getAllBlogCategories = async (req, res) => {
    try {
      // Retrieve all blog categories
      const blogCategories = await BlogCategory.find();
  
      // Return the list of blog categories
      return res.json(blogCategories);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {
    getAllBlogCategories
  };
const BlogCategory = require("../../model/BlogCategoryModel");

// Get a blog category by ID
const getBlogCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the blog category by ID
      const blogCategory = await BlogCategory.findById(id);
  
      // Check if the blog category exists
      if (!blogCategory) {
        return res.status(404).json({ error: 'Blog category not found' });
      }
  
      // Return the blog category
      return res.json(blogCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {
    getBlogCategoryById
  };
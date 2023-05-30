const BlogCategory = require("../../model/BlogCategoryModel");

// Update a blog category
const updateBlogCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
  
      // Find the blog category by ID and update its name
      const blogCategory = await BlogCategory.findByIdAndUpdate(id, { name }, { new: true });
  
      // Check if the blog category exists
      if (!blogCategory) {
        return res.status(404).json({ error: 'Blog category not found' });
      }
  
      // Return the updated blog category
      return res.json(blogCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {
    updateBlogCategory
  };
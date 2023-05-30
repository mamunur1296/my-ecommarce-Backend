const BlogCategory = require("../../model/BlogCategoryModel");

// Delete a blog category
const deleteBlogCategory = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the blog category by ID and remove it
      const blogCategory = await BlogCategory.findByIdAndRemove(id);
  
      // Check if the blog category exists
      if (!blogCategory) {
        return res.status(404).json({ error: 'Blog category not found' });
      }
  
      // Return a success message
      return res.json({ message: 'Blog category deleted successfully' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {
    deleteBlogCategory
  };
  
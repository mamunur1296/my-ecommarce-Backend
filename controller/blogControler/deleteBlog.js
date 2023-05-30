const validateMongoId = require("../../Utilities/validateMongoId");
const Blog = require("../../model/blogModel");

// Controller to delete a blog post by ID
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoId(id)
    // Find the blog post by ID and remove it
    const deletedBlog = await Blog.findByIdAndRemove(id);

    // Check if the blog post exists
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Return the deleted blog post
    return res.json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    deleteBlog,
  };

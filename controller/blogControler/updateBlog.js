const validateMongoId = require("../../Utilities/validateMongoId");
const Blog = require("../../model/blogModel");

// Controller to update a blog post by ID
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoId(id)
    // updated the blog post by ID
   
    const updatedblog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    // Check if the blog post exists
    if (!updatedblog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Return the updated blog post
    return res.json(updatedblog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    updateBlog,
  };

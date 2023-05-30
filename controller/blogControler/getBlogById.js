
const Blog = require("../../model/blogModel");
const User = require("../../model/usersmodel");
const validateMongoId = require("../../Utilities/validateMongoId");

// Controller to get a single blog post by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoId(id)

    // Find the blog post by ID
    const blog = await Blog.findById(id).populate('likes')

    // Check if the blog post exists
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    // Increment the numberOfViews field by 1
    blog.numberOfViews += 1;
    await blog.save();

    // Return the blog post
    return res.json(blog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    getBlogById,
  };
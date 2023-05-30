const Blog = require("../../model/blogModel");

// Controller to get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    // Retrieve all blog posts from the database
    const blogs = await Blog.find();

    // Return the list of blog posts
    return res.json(blogs);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};
module.exports = {
    getAllBlogs,
  };

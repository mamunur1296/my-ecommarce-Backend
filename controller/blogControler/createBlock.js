const Blog = require("../../model/blogModel");


// Controller to create a new blog post
const createBlog = async (req, res) => {
  try {
    // Create a new blog instance
    const blog = new Blog(req.body);

    // Save the blog post to the database
    const savedBlog = await blog.save();

    // Return the saved blog post
    return res.status(201).json(savedBlog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    createBlog,
  };






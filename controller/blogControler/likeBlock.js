const validateMongoId = require("../../Utilities/validateMongoId");
const Blog = require("../../model/blogModel");

const likeBlog = async (req, res) => {
    try {
      const { blogId } = req.body;
      validateMongoId(blogId);
      const blog = await Blog.findById(blogId);
      const loginUserId = req?.user?.userID;
      console.log(req);
  
      // Check if the blog post exists
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
  
      // Check if the user has already liked the blog post
      if (blog?.likes?.includes(loginUserId)) {
        // Remove the user from the likes array
        blog.likes = blog?.likes?.filter((userId) => userId.toString() !== loginUserId.toString());
        blog.isLike = false;
  
        // Save the changes to the blog post
        await blog.save();
  
        // Return the updated blog post
        return res.json(blog);
      }
  
      // Check if the user has already disliked the blog post
      if (blog?.dislikes?.includes(loginUserId)) {
        // Remove the user from the dislikes array
        blog.dislikes = blog?.dislikes?.filter((userId) => userId.toString() !== loginUserId.toString());
        blog.isDislike = false;
      }
  
      // Add the user ID to the likes array and set isLike to true
      blog?.likes?.push(loginUserId);
      blog.isLike = true;
  
      // Save the changes to the blog post
      await blog.save();
  
      // Return the updated blog post
      return res.json(blog);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  

module.exports = {
    likeBlog,
  };
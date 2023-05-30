const express = require('express');
const { createBlog } = require('../controller/blogControler/createBlock');
const { getAllBlogs } = require('../controller/blogControler/getAllBlog');
const { updateBlog } = require('../controller/blogControler/updateBlog');
const { getBlogById } = require('../controller/blogControler/getBlogById');
const { deleteBlog } = require('../controller/blogControler/deleteBlog');
const { likeBlog } = require('../controller/blogControler/likeBlock');
const verifyToken = require('../middleware/authMeddleware');
const { dislikeBlog } = require('../controller/blogControler/dislikeBlog');
const router = express.Router();


// Create a new blog post
router.post('/blogs', createBlog);
// Get all blog posts
router.get('/getallblogs', getAllBlogs);
// Get a single blog post by ID
router.get('/getBlogById/:id', getBlogById);
// Update a blog post by ID
router.put('/updateBlog/:id', updateBlog);
router.put('/likeBlocks',verifyToken, likeBlog);
router.put('/setIsDislike',verifyToken,dislikeBlog);
// Delete a blog post by ID
router.delete('/deleteBlog/:id', deleteBlog);

module.exports = router;

const express = require('express');
const { createBlogCategory } = require('../controller/BlogCategoryCategory/createBlogCategory');
const { getAllBlogCategories } = require('../controller/BlogCategoryCategory/getAllBlogCategories');
const { getBlogCategoryById } = require('../controller/BlogCategoryCategory/getBlogCategoryById');
const { updateBlogCategory } = require('../controller/BlogCategoryCategory/updateBlogCategory');
const { deleteBlogCategory } = require('../controller/BlogCategoryCategory/deleteBlogCategory');
const router = express.Router();


// Create a new blog category
router.post('/createBlogCategory', createBlogCategory);

// Get all blog categories
router.get('/getAllBlogCategories', getAllBlogCategories);

// Get a blog category by ID
router.get('/getBlogCategoryById/:id', getBlogCategoryById);

// Update a blog category
router.put('/updateBlogCategory/:id', updateBlogCategory);

// Delete a blog category
router.delete('/deleteBlogCategory/:id', deleteBlogCategory);

module.exports = router;

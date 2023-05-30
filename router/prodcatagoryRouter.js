const express = require('express');
const router = express.Router();
const { createCategory } = require('../controller/prodcategoryControler/createCategory');
const { updateCategory } = require('../controller/prodcategoryControler/updateCategory');
const { deleteCategory } = require('../controller/prodcategoryControler/deleteCategory');
const { getCategoryById } = require('../controller/prodcategoryControler/getCategoryById');
const { getAllCategories } = require('../controller/prodcategoryControler/getAllCategories');

// Create a new category
router.post('/createCategory', createCategory);

// Get all categories
router.get('/getAllCategories', getAllCategories);

// Get a category by ID
router.get('/getCategoryById/:id', getCategoryById);

// Update a category
router.put('/updateCategory/:id', updateCategory);

// Delete a category
router.delete('/deleteCategory/:id', deleteCategory);

module.exports = router;

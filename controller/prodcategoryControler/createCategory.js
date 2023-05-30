const Category = require("../../model/prodcategoryModel");

// Create a new category
const createCategory = async (req, res) => {
    try {
      const { name } = req.body;
  
      // Check if the category already exists
      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ error: 'Category already exists' });
      }
  
      // Create the new category
      const category = new Category({ name });
      await category.save();
  
      // Return the created category
      return res.status(201).json(category);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

  module.exports={
    createCategory
  };
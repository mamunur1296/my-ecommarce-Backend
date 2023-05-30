const Category = require("../../model/prodcategoryModel");

// Get a category by ID
const getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the category by ID
      const category = await Category.findById(id);
  
      // Check if the category exists
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      // Return the category
      return res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  
  module.exports={
    getCategoryById
  };  
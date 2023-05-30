const Category = require("../../model/prodcategoryModel");

// Update a category
const updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
        
      // Find the category by ID
      const category = await Category.findById(id);
  
      // Check if the category exists
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      // Update the category fields
      category.name = name;
      await category.save();
  
      // Return the updated category
      return res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports={
    updateCategory
  };
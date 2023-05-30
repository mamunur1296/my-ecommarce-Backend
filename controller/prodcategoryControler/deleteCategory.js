const Category = require("../../model/prodcategoryModel");

// Delete a category
const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the category by ID and remove it
      const category = await Category.findByIdAndRemove(id);
  
      // Check if the category exists
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      // Return a success message
      return res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

  module.exports={
    deleteCategory
  };  
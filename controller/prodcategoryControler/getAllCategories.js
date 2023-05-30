const Category = require("../../model/prodcategoryModel");

// Get all categories
const getAllCategories = async (req, res) => {
    try {
      // Retrieve all categories
      const categories = await Category.find();
  
      // Return the categories
      return res.json(categories);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  
  
  
  module.exports={
    getAllCategories
  };  
  
  
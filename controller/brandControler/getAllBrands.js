const Brand = require("../../model/brandModel");

// Get all brands
const getAllBrands = async (req, res) => {
    try {
      const brands = await Brand.find();
      res.json(brands);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  module.exports = {
     getAllBrands
  };
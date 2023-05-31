const Brand = require("../../model/brandModel");

// Get a brand by ID
const getBrandById = async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await Brand.findById(id);
      if (!brand) {
        return res.status(404).json({ error: 'Brand not found' });
      }
      res.json(brand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  module.exports = {
    getBrandById
  };
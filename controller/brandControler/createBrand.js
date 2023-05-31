const Brand = require("../../model/brandModel");

// Create a new brand
const createBrand = async (req, res) => {
    try {
      const { name } = req.body;
      const brand = new Brand({
        name,
      });
      const newBrand = await brand.save();
      res.status(201).json(newBrand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  module.exports = {
    createBrand
  };
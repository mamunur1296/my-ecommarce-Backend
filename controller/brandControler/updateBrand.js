const Brand = require("../../model/brandModel");

// Update a brand by ID
const updateBrand = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, logo, website } = req.body;
      const updatedBrand = await Brand.findByIdAndUpdate(
        id,
        { name, description, logo, website },
        { new: true }
      );
      if (!updatedBrand) {
        return res.status(404).json({ error: 'Brand not found' });
      }
      res.json(updatedBrand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  module.exports = {
    updateBrand
  };
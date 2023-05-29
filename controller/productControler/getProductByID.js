const validateMongoId = require("../../Utilities/validateMongoId");
const Product = require("../../model/productModel");



const getProductById = async (req, res) => {
  const { id } = req.params;
  validateMongoId(id)
  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getProductById;

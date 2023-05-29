const Product = require("../../model/productModel");


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({ data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getAllProducts;

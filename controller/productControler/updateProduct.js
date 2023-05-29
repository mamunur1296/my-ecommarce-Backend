const Product = require("../../model/productModel");
const slugify = require('slugify');

const updateProductById = async (req, res) => {
  const { id } = req.params;
  

  try {
    if(req.body.title){
        req.body.slug=slugify(req.body.title)
      }
    // Find the product by ID and update its fields
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ data: updatedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = updateProductById;

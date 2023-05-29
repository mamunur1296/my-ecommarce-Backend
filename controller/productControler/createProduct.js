const Product = require("../../model/productModel");
const slugify = require('slugify');

const createProduct = async (req, res) => {
    try {
      if(req.body.title){
        req.body.slug=slugify(req.body.title)
      }
      // Create a new product object
      const newProduct = await new Product(req.body);
  
      // Save the new product to the database
      const createdProduct = await newProduct.save();
  
      // Send a response with the created product
      res.status(201).json({ data: createdProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  };
  
  module.exports = createProduct;
  
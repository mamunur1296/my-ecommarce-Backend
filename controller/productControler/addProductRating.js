const Product = require("../../model/productModel");

const addProductRating = async (req, res) => {
  try {
    const { productId,  star ,comment } = req.body;
    const  userId  = req.user.userID;

    // Find the product by ID
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check if the user has already rated the product
    const existingRating = product.ratings.find(
      (rating) => rating?.userId?.toString() === userId?.toString()
    );

    if (existingRating) {
      // Update the existing rating
      existingRating.star = star;
      existingRating.comment = comment;
    } else {
      // Add a new rating
      product?.ratings?.push({ userId, star ,comment });
    }

    // Calculate the average rating for the product
    const totalRatings = product.ratings.length;
    const totalStars = product?.ratings?.reduce((acc, rating) => acc + rating.star, 0);
    const averageRating = totalStars / totalRatings;

    // Update the total rating and average rating fields
    product.totalrating = totalRatings;
    product.averageRating = averageRating;

    // Save the changes to the product
    await product.save();

    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};



  module.exports={
    addProductRating
  };
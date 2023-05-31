const Coupon = require("../../model/couponModel");

// Create a new coupon
const createCoupon = async (req, res) => {
    try {
      const { name} = req.body;
  
      // Check if the coupon already exists
      const existingCoupon = await Coupon.findOne({ name });
      if (existingCoupon) {
        return res.status(400).json({ error: 'Coupon already exists' });
      }
  
      // Create the coupon
      const coupon = new Coupon(req.body);
  
      // Save the coupon to the database
      await coupon.save();
  
      return res.json(coupon);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  module.exports = {
    createCoupon
  };
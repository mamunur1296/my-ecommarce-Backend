const Coupon = require("../../model/couponModel");

// Get all coupons
const getCoupons = async (req, res) => {
    try {
      // Retrieve all coupons from the database
      const coupons = await Coupon.find();
  
      return res.json(coupons);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  module.exports = {
    getCoupons
  };
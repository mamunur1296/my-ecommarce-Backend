const Coupon = require("../../model/couponModel");

// Update a coupon by ID
const updateCoupon = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, expiry, discount } = req.body;
  
      // Find the coupon by ID
      const coupon = await Coupon.findById(id);
  
      // Check if the coupon exists
      if (!coupon) {
        return res.status(404).json({ error: 'Coupon not found' });
      }
  
      // Update the coupon fields
      coupon.name = name;
      coupon.expiry = expiry;
      coupon.discount = discount;
  
      // Save the updated coupon
      await coupon.save();
  
      return res.json(coupon);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {
    updateCoupon
  };
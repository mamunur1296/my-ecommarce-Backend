const Coupon = require("../../model/couponModel");

// Delete a coupon by ID
const deleteCoupon = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the coupon by ID and remove it
    const coupon = await Coupon.findByIdAndRemove(id);

    // Check if the coupon exists
    if (!coupon) {
      return res.status(404).json({ error: 'Coupon not found' });
    }

    return res.json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  deleteCoupon
};

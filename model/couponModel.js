const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    uppercase:true,
  },
  expiry: {
    type: Date,
    required: true
  },
  discount: {
    type: Number,
    required: true
  }
});

const Coupon =mongoose.model('Coupon', couponSchema);

module.exports = Coupon;

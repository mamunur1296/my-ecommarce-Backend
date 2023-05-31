const express = require('express');
const { createCoupon } = require('../controller/couponControler/createCoupon');
const { getCoupons } = require('../controller/couponControler/getCoupons');
const { updateCoupon } = require('../controller/couponControler/updateCoupon');
const { deleteCoupon } = require('../controller/couponControler/deleteCoupon');
const router = express.Router();

// Create a new coupon
router.post('/createCoupon', createCoupon);

// Get all coupons
router.get('/getCoupons', getCoupons);

// Update a coupon by ID
router.put('/updateCoupon/:id', updateCoupon);

// Delete a coupon by ID
router.delete('/deleteCoupon/:id', deleteCoupon);

module.exports = router;

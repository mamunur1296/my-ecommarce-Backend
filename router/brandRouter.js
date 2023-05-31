const express = require('express');
const { createBrand } = require('../controller/brandControler/createBrand');
const { getAllBrands } = require('../controller/brandControler/getAllBrands');
const { getBrandById } = require('../controller/brandControler/getBrandById');
const { updateBrand } = require('../controller/brandControler/updateBrand');
const { deleteBrand } = require('../controller/brandControler/deleteBrand');
const router = express.Router();


// GET /brands
router.get('/getAllBrands', getAllBrands);

// GET /brands/:id
router.get('/getBrandById/:id', getBrandById);

// // POST /brands
router.post('/createBrand', createBrand);

// // PUT /brands/:id
router.put('/updateBrand/:id', updateBrand);

// // DELETE /brands/:id
router.delete('/deleteBrand/:id', deleteBrand);

module.exports = router;

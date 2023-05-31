const express = require('express');
const createProduct = require('../controller/productControler/createProduct');
const getProductById = require('../controller/productControler/getProductByID');
const getAllProducts = require('../controller/productControler/getALLProduct');
const updateProductById = require('../controller/productControler/updateProduct');
const deleteProductById = require('../controller/productControler/deleteProduct');
const isAdmin = require('../middleware/isAdminVarify');
const verifyToken = require('../middleware/authMeddleware');
const { addWishlist } = require('../controller/productControler/addWishlist ');
const { addProductRating } = require('../controller/productControler/addProductRating');
const router=express.Router()


router.post("/creatProduct", verifyToken,isAdmin, createProduct)
router.get("/getProduct/:id" , getProductById)
router.get("/getAllProduct" , getAllProducts)
router.put("/updateProduct/:id", verifyToken,isAdmin, updateProductById)
router.put("/addWishlist", verifyToken, addWishlist)
router.put("/addProductRating", verifyToken, addProductRating)
router.delete("/deleteProduct/:id" ,verifyToken,isAdmin, deleteProductById)

module.exports=router;
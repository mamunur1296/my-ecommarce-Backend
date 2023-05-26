const express = require('express');
const userController = require('../controller/userscontroller');
const router=express.Router()
router.post('/regester',userController)
module.exports=router;
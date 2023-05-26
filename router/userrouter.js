const express = require('express');
const { userController, loginController } = require('../controller/userscontroller');
const router=express.Router()
router.post('/regester',userController)
router.post('/login',loginController)
module.exports=router;
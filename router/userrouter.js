const express = require('express');
const { userController, loginController, getAllUsers } = require('../controller/userscontroller');



const router=express.Router()




router.post('/regester',userController)
router.post('/login',loginController)
router.get('/all-user',getAllUsers)




module.exports=router;
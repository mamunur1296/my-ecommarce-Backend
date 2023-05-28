const express = require('express');
const userRagister = require('../controller/authControler/userController');
const loginUser = require('../controller/authControler/loginController');
const findAllUser = require('../controller/authControler/getAllUsers');
const findSingleUsers = require('../controller/authControler/getSingleUsers');
const DeleitUser = require('../controller/authControler/DeleitUserbyId');
const updateOneUser = require('../controller/authControler/updateUser');



const router=express.Router()




router.post('/regester',userRagister)
router.post('/login',loginUser)
router.get('/all-user',findAllUser)
router.get('/:id',findSingleUsers)
router.delete('/:id',DeleitUser)
router.put('/updetUser/:id',updateOneUser)




module.exports=router;
const express = require('express');
const userRagister = require('../controller/authControler/userController');
const loginUser = require('../controller/authControler/loginController');
const findAllUser = require('../controller/authControler/getAllUsers');
const findSingleUsers = require('../controller/authControler/getSingleUsers');
const DeleitUser = require('../controller/authControler/DeleitUserbyId');
const updateOneUser = require('../controller/authControler/updateUser');
const verifyToken = require('../middleware/authMeddleware');
const isAdmin = require('../middleware/isAdminVarify');
const { isBlockUser, isUnBlockUser } = require('../controller/authControler/blockUnblockUser');
const handleRefreshToken = require('../middleware/handleRefreshToken ');
const logoutController = require('../controller/authControler/logoutControler');



const router=express.Router()




router.post('/regester',userRagister)
router.post('/login',loginUser)
router.post('/logout',logoutController)
router.post('/refresh-token', handleRefreshToken);
router.get('/all-user',verifyToken,isAdmin,findAllUser)
router.get('/:id',verifyToken, findSingleUsers)
router.delete('/:id',verifyToken,DeleitUser)
router.put('/edit-user',verifyToken,updateOneUser)
router.put('/block-user/:id',verifyToken,isAdmin,isBlockUser)
router.put('/unblock-user/:id',verifyToken,isAdmin,isUnBlockUser)




module.exports=router;
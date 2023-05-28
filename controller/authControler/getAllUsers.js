const User = require("../../model/usersmodel");

  // get all users 
  const findAllUser= async (req,res)=>{
    console.log(req.user);
    try{
        const allUser= await User.find({})
        res.json({
            data:allUser
        })

    }catch(error){
        console.log(error);
    }
  }
  module.exports=findAllUser
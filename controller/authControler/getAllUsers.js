const User = require("../../model/usersmodel");

  // get all users 
  const findAllUser= async (req,res)=>{
    try{
        const allUser= await User.find({})
        res.json({
            data:allUser
        })

    }catch(error){
        console.log(error);
    }
  }
  module.exports=findAllUser;
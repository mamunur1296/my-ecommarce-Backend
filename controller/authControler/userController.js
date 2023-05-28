const User = require("../../model/usersmodel");

const userRagister=async(req,res)=>{

    const email=req.body.email;
    const isAguest= await User.findOne({email});
    console.log(isAguest);
    if(!isAguest){
        //create a new user
        const newUser= await  User.create(req.body);
        res.json({
            data:newUser,
            smg:'user created successfully',
            sucess:true,
        })
    } else{
        // user allrady aguest 
        res.json({
            smg:'user allrady aguest',
            sucess:false,
        })
    }
}
module.exports= userRagister;
const user = require('../model/usersmodel');
const userController=async(req,res)=>{
    console.log(req.body);
    const email=req.body.email;
    const isAguest= await user.findOne({email});
    if(!isAguest){
        //create a new user
        const newUser= await  user.create(req.body);
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
module.exports=userController;
const { default: mongoose } = require("mongoose")

const dbconnect=()=>{
    try{
        mongoose.connect(process.env.DBURL ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("mongodb connect successfully");
    }catch(error){
        console.log(error);
    }
}
module.exports= dbconnect;
const express = require('express');
const app=express();
const dotenv = require('dotenv').config();
const port=process.env.PORT || 4000;
app.use("/",(req,res)=>{
    res.send('hello would and my server ')
})
app.listen(port,()=>{
    console.log(`sarver is raning posrt ${port}}`);
})
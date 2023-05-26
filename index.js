const express = require('express');
const dbconnect = require('./config/dbConnect');
const authRouter = require('./router/userrouter');
const bodyParser = require('body-parser');
const app=express();
const dotenv = require('dotenv').config();
const port=process.env.PORT || 4000;
dbconnect()


app.use(bodyParser())
app.use('/api/router',authRouter)
app.listen(port,()=>{
    console.log(`sarver is raning posrt ${port}}`);
})
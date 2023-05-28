const express = require('express');
const dbconnect = require('./config/dbConnect');
const authRouter = require('./router/userrouter');
const bodyParser = require('body-parser');
const { isNotFoundHandlar, isErrorHandlar } = require('./middleware/errorHandelar');
const app=express();
const dotenv = require('dotenv').config();
const port=process.env.PORT || 4000;
dbconnect()


// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

//routers
app.use('/api/router',authRouter)

//404 error handel
app.use(isNotFoundHandlar);
//common error handler
app.use(isErrorHandlar);

app.listen(port,()=>{
    console.log(`sarver is raning posrt ${port}}`);
})




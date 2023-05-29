const express = require('express');
const dbconnect = require('./config/dbConnect');
const authRouter = require('./router/userrouter');
const productRouter = require('./router/productRouter');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const { isNotFoundHandlar, isErrorHandlar } = require('./middleware/errorHandelar');
const app=express();
const dotenv = require('dotenv').config();
const port=process.env.PORT || 4000;
dbconnect()


// Middleware for parsing JSON

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

// Middleware for parsing URL-encoded data
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));








//routers
app.use('/api/router',authRouter)
app.use('/api/product',productRouter)





//404 error handel
app.use(isNotFoundHandlar);
//common error handler
app.use(isErrorHandlar);


//lets start my app
app.listen(port,()=>{
    console.log(`sarver is raning posrt ${port}}`);
})




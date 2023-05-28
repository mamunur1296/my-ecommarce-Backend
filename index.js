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

// app.use(bodyParser())
//routers
app.use('/api/router',authRouter)

//404 error handel
app.use(isNotFoundHandlar);
//common error handler
app.use(isErrorHandlar);

app.listen(port,()=>{
    console.log(`sarver is raning posrt ${port}}`);
})



//external import
// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// //internal import
// const {
//   isNotFoundHandler,
//   isErrorhandler,
// } = require("./meddlewars/common/errorHandler");
// const usersRouter = require("./routers/users/usersRouter");
// const studentsRouter = require("./routers/students/studentsRouter");
// const app = express();
// dotenv.config();

// //Mongodb connection
// mongoose
//   .connect(process.env.MONGO_CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("db connection successful"))
//   .catch((err) => console.log(err));
// // request parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// //parser cookies
// app.use(cookieParser(process.env.COOKIE_SECRETE));
// //routing
// app.use("/users", usersRouter);
// app.use("/students", studentsRouter);
// //404 error handel
// app.use(isNotFoundHandler);
// //common error handler
// app.use(isErrorhandler);

// //app listen
// app.listen(process.env.PORT, (req, res) => {
//   console.log(`application is ran on port ${process.env.PORT}`);
// });
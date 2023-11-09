//access routers
const product_router = require("./routers/product_router");
const user_router = require("./routers/user_router");

//access express functionalities
const express = require("express");
const app = express();

//access env file contents
const env = require("dotenv");
env.config();

//access mongoose functionalities
const mongoose = require("mongoose");



//starts the server to start accpeting html requests
app.listen(process.env.PORT, () => {
    console.log("\nReady to accept requests in " + process.env.PORT);
})



//connect to mongoose database
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("DB Connection successful") //execute this code if connected successful
})
.catch((err) => {
    console.log(err) //prints the error if an error occurred
})



//allows handling of JSON
app.use(express.json());



//middleware for products
app.use('/api/products', product_router);

//middleware for user
app.use('/api/users', user_router);
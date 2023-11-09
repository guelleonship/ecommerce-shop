
//access mongoose to use Schema function
const mongoose = require("mongoose");


//create a new schema
const user_schema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    }
);



//first argument: name of the data model | collection name basis
//second argument: basis of the data model
module.exports = mongoose.model("User", user_schema);


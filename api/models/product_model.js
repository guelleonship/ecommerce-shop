
//access mongoose to use Schema function
const mongoose = require("mongoose");

//create a new schema
const product_schema = new mongoose.Schema(
    {
        name: {type: String, required:true, unique:true},
        description: {type: String, required:true},
        category: {type: Array},
        brand: {type: String, required: true},
        size: {type: String},
        price: {type: Number, required:true},
    }, {timestamps: true}
);


//first argument: name of the data model | collection name basis
//second argument: basis of the data model
module.exports = mongoose.model("Product", product_schema);


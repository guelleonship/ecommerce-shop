//This module consists of the CRUD operations used by the routers


//Refer to Product Mongoose Model as we are modifying the data model
const product_model = require("../models/product_model");

//access mongoose to save data to database
const mongoose = require("mongoose");



//CREATE A PRODUCT
const create_product = async (req,res) => {

    //extracts the data of the new product entry
    const new_product = new product_model(req.body);

    //extracting the name of a product
    const {name} = new_product;

    try {
        const product_to_db = await new_product.save(); //saves the data to the database
        res.status(200).json({message: `The ${name} product has been added.`});
    }
    catch (err) {
        res.status(400).json(err);
    }

}



//UPDATE A PRODUCT DATA
const update_product = async (req,res) => {

    try {

        //extracting the name of a product
        const extract_product_name = await product_model.findById(req.params.id);
        const {name} = extract_product_name;

        const updated_product = await product_model.findByIdAndUpdate({_id: req.params.id},{...req.body})
        res.status(200).json({message: `The ${name} product has been updated.`});

    }
    catch (err) {

        res.status(400).json(err);

    }
}



//DELETE A PRODUCT
const delete_product = async (req,res) => {

    try {

        //extracting the name of a product
        const extract_product_name = await product_model.findById(req.params.id);
        const {name} = extract_product_name;
        
        //deleting the product from the database
        await product_model.findByIdAndDelete({_id: req.params.id});

        res.status(200).json({message: `The ${name} product has been deleted!`});

    }
    catch (err) {

        res.status(400).json(err);

    }

}



//GET A PRODUCT
const get_one_product = async (req,res) => {

    try {

         //extracts product data object through product id
         const searched_product = await product_model.findById(req.params.id)

         //sends the product object data
         res.status(200).json(searched_product)

    }
    catch(err) { 

    }

}



//GET ALL PRODUCTS
const get_all_products = async (req,res) => {

    try {

        const all_products = await product_model.find();
        res.status(200).json(all_products);

    }
    catch (err) {
        res.status(400).json(err);
    }
}



//export the functions
//used by the routes module
module.exports = {
    create_product,
    update_product,
    delete_product,
    get_one_product,
    get_all_products
}
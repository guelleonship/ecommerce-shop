
//import user data model
const User = require('../models/user_model');

//import bcrypt
const bcrypt = require('bcrypt');

//access json webtoken functionalities
const jwt = require('jsonwebtoken');


//user signs up
const user_signup = async (req, res) => {

    //extracting data from the user input (request body)
    const { username, password } = req.body;

    try {

        //checks if username is existing
        const existing_user = await User.findOne({ username: username });
        if (existing_user) {
            return res.status(400).json({ error: "Username already taken." })
        }

        //encrypt password
        const hashed_password = await bcrypt.hash(password, 10);

        //creating new user
        const new_user = await User.create({ username, password: hashed_password });
        res.status(200).json({ message: "Registration successful!" });


    } catch (error) {

        res.status(400).json({ error: error.message });

    }

}


//user logs in
const user_login = async (req, res) => {

    //extracting data from the user input (request body)
    const { username, password } = req.body;

    try {

        //checks whether the username is in the database
        const existing_user = await User.findOne({username: username});
        if (!existing_user) {
            return res.status(400).json({ error: "Username not found" });
        }

        //checks whether password inputted is valid
        const does_password_match = await bcrypt.compare(password, existing_user.password)
        if(!does_password_match) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ userId: existing_user._id}, "SECRET", { expiresIn: '2h' });
        res.status(200).json({message: "Logged in successfully", token});

    } catch (error) {

        res.status(400).json({ error: error.message });

    }

}


module.exports = { user_signup, user_login }
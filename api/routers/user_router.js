
//import router functionalities
const router = require('express').Router();

//import controllers
const { user_signup, user_login } = require('../controllers/user_controller');



// signup route
router.post('/signup', user_signup);

// login route
router.post('/login', user_login);

module.exports = router;
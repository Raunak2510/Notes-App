const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/user.controllers.js');
const {loginUser}= require('../controllers/user.controllers.js');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

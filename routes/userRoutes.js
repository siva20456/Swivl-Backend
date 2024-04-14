const express = require('express');
const { register, login } = require('../controllers/userController');
const verifyTheUser = require('../Middlewares/verify');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;

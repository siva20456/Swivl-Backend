const { registerUser, findUserByUsername } = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function register(req, res) {
    const { username, mail, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }

    // Check if user exists
    const userExists = await findUserByUsername(username);
    if (userExists) {
        return res.status(409).send('User already exists.');
    }

    // Register user
    const userId = await registerUser(username, mail, password);
    res.status(201).send({ userId, username,data:"User Registered Successfully" });
}

async function login(req, res) {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (!user) {
        return res.status(401).send('User Not Valid..!');
    }
    const isCorrect = await bcrypt.compare(password,user.password)

    if(!isCorrect){
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET);
    res.send({ jwr_token:token });
}



module.exports = { register, login };

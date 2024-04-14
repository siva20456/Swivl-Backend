const { getDb } = require('./db');
const bcrypt = require('bcrypt');

async function registerUser(username, mail, password) {
    const db = getDb();
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.collection('users').insertOne({ username, password: hashedPassword, mail});
    return result.insertedId;
}

async function findUserByUsername(username) {
    const db = getDb();
    return db.collection('users').findOne({ username });
}

module.exports = { registerUser, findUserByUsername };

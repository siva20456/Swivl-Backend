const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

let db = null;

connectToDb = async() => {
    const client = new MongoClient(process.env.MONGO_URL, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });
    db = client.db('SwivlBackend');
}

function getDb() {
    return db;
}

module.exports = { connectToDb, getDb };

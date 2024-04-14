const express = require('express');
const cors = require('cors')
require('dotenv').config()
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./req.yaml');
const { connectToDb } = require('./models/db');

const userRoutes = require('./routes/userRoutes');
const diaryEntryRoutes = require('./routes/diaryEntryRoutes');

app = express()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3006;

app.use('/users', userRoutes);
app.use('/diary', diaryEntryRoutes);



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3005/", "https://swivl-backend-1-7srh.onrender.com/");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization");
    next()
});

connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection failed', err);
    process.exit();
});


app.get('/', (req,res) => {
    res.send("Hi, Welcome to Swivl - Backend for testing the routes navigate to /docs for swagger document.")
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
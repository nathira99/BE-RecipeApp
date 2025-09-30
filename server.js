// Import express module
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config;

// Create express application
const app = express();

app.get('/', (req,res) =>{
    res.json({message: `Hello Express!`});
})

// Listen on a port for incoming requests
app.listen(3001, 'localhost', () => {
    console.log('server listening on http://localhost:3001');
});

// connect to mongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => console.error('could not connect to mongoDB', err));
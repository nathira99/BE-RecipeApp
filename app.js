// Import express module
const express = require('express');

// Create express application
const app = express();

app.get('/recipes', (req,res) =>{
    res.json({message: `Get all recipes!!`});
});

module.exports = app;
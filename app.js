// Import express module
const express = require('express');
const recipesRouter = require('./routes/recipesRoutes');

// Create express application
const app = express();

const port = process.env.PORT || 4000 

app.use(express.json());

app.use('/recipes', recipesRouter);

module.exports = app;
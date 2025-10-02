// Import express module
const express = require('express');
const recipesRouter = require('./routes/recipesRoutes');

// Create express application
const app = express();

app.use(express.json());

app.use('/', recipesRouter);

module.exports = app;
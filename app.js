// Import express module
const express = require('express');
const recipesRouter = require('./routes/recipesRoutes');
const authRouter = require('./routes/authRoutes');

// Create express application
const app = express();

app.use(express.json());

app.use('/recipes', recipesRouter);
app.use('/auth', authRouter)

module.exports = app;
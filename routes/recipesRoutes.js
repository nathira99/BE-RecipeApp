const express = require('express');
const { getAllRecipes, createRecipe } = require('../controllers/recipeController');
const recipesRouter = express.Router();

recipesRouter.post('/', createRecipe);
recipesRouter.get('/', getAllRecipes);

module.exports = recipesRouter;
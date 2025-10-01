const express = require('express');
const { getAllRecipes, createRecipe, getRecipeByID } = require('../controllers/recipeController');
const recipesRouter = express.Router();

recipesRouter.post('/', createRecipe);
recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/:id', getRecipeByID);

module.exports = recipesRouter;
const express = require('express');
const { getAllRecipes, createRecipe, getRecipeByID, updateRecipeByID, deleteRecipeByID } = require('../controllers/recipeController');
const recipesRouter = express.Router();

recipesRouter.post('/', createRecipe);
recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/:id', getRecipeByID);
recipesRouter.put('/:id', updateRecipeByID);
recipesRouter.delete('/:id', deleteRecipeByID)

module.exports = recipesRouter;
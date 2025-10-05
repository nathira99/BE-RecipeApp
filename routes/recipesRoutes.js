const express = require('express');
const { getAllRecipes, createRecipe, getRecipeByID, updateRecipeByID, deleteRecipeByID } = require('../controllers/recipeController');
const { isAuthenticated } = require('../middlewares/auth');
const recipesRouter = express.Router();

recipesRouter.post('/', createRecipe);
recipesRouter.get('/', isAuthenticated, getAllRecipes);
recipesRouter.get('/:id', getRecipeByID);
recipesRouter.put('/:id', updateRecipeByID);
recipesRouter.delete('/:id', deleteRecipeByID);

module.exports = recipesRouter;
const recipes = require("../models/recipes");

const createRecipe = async (req, res) => {
  try {

    const newRecipe = new recipes(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json({message: 'Recipe created', recipes: savedRecipe})

  } catch (error) {
    res
      .status(500)
      .json({ message: "Creating new recipe failed...", error: error.message });
  }
};

const getAllRecipes = (req, res) => {
  res.json({
    message: "Get all recipes",
  });
};

module.exports = {
  getAllRecipes,
  createRecipe,
};

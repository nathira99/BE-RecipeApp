const recipes = require("../models/recipes");

const createRecipe = async (req, res) => {
  try {
    const newRecipe = new recipes(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json({ message: "Recipe created", recipes: savedRecipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Creating new recipe failed...", error: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipe = await recipes.find().select("-__v");
    res.status(200).json({ recipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Fetching recipe failed...", error: error.message });
  }
};

const getRecipeByID = async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await recipes.findById(id).select("-__v");
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found..." });
    } else res.status(200).json({ recipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Fetching recipe by ID failed...", error: error.message });
  }
};

const updateRecipeByID = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedRecipe = await recipes.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not updated,.." });
    } else res.status(200).json({ message: "recipe updated" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Updating recipe failed...", error: error.message });
  }
};

const deleteRecipeByID = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedRecipe = await recipes.findByIdAndDelete(id);

    if (!deletedRecipe) {

      return res.status(404).json({ message: "Recipe not found..." });

  } else {
    res.status(200).json({ message: "recipe deleted", Recipe: deletedRecipe});
  }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Updating recipe failed...", error: error.message });
  }
};

module.exports = {
  getAllRecipes,
  createRecipe,
  getRecipeByID,
  updateRecipeByID,
  deleteRecipeByID
};

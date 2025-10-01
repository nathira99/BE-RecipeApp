const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
      },
    ],
    instructions: {
      type: String,
    },
    recipeType: {
      type: String,
      enum: [
        "breakfast",
        "lunch",
        "dinner",
        "snack",
        "drink",
        "dessert",
        "other",
      ],
    },
    // cuisineType: {
    //   type: String,
    //   enum: ["italian", "indian", "mexican", "chinese", "american", "other"],
    // },
    prepTime: {
      type: Number,
    },
    servings: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipes", recipeSchema, "Recipes");

const {
  getRecipesByNameOrIngredient,
  getAllRecipes
} = require('../services/recipes')

/**
 * Get recipes.
 *
 * @param req The optional 'filter' query param filters by recipe name or ingredient name.
 * @param res Return filtered recipes if the 'filter' is received, otherwise return all recipes.
 */
module.exports.getRecipes = (req, res) => {
  const toSearch = req.query.filter;
  if (toSearch) {
    return res.json(getRecipesByNameOrIngredient(toSearch));
  } else {
    return res.json(getAllRecipes());
  }
}
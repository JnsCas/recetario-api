const {
  getRecipesByNameOrIngredient,
  getAllRecipes,
  putScore
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

module.exports.putScore = (req, res) => {
  const idRecipe = req.params.id
  const score = req.body.score
  const recipe = putScore(idRecipe, score)
  if (recipe) {
    return res.json(recipe)
  } else {
    return res.sendStatus(404)
  }
}
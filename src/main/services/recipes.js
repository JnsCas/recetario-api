//simulating database
const recipes = require('../resources/recipes.json')

module.exports.getAllRecipes = () => {
  console.log('Returning all recipies..')
  return recipes;
}

module.exports.getRecipesByNameOrIngredient = (toSearch) => {
  const toSearchLowerCase = toSearch.toLowerCase();
  console.log(`Filtering recipes by '${toSearch}' name..`)
  return recipes.filter(recipe =>
    existsInRecipe(recipe.name, toSearchLowerCase) || existsInIngredient(recipe.ingredients, toSearchLowerCase)
  )
}

function existsInRecipe(name, toSearchLowerCase) {
  return name.toLowerCase().includes(toSearchLowerCase)
}

function existsInIngredient(ingredients, toSearchLowerCase) {
  console.log(`Filtering ingredients by '${toSearchLowerCase}' name..`)
  return ingredients.some(ingredient =>
    ingredient.name.toLowerCase().includes(toSearchLowerCase)
  )
}
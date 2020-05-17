const fs = require('fs');
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

module.exports.putScore = (id, score) => {
  const recipe = recipes.find(recipe => recipe.id === id)
  if (recipe) {
    recipe.scores.push(score)
    store()
  }
  return recipe;
}

function store() {
  fs.writeFile('./src/main/resources/recipes.json', JSON.stringify(recipes), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("File saved successfully!");
  });
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
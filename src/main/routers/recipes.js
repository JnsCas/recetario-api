const Recipe = require('../model/Recipe');

const recipes = [
  new Recipe(
    "Arroz con pollo",
    [],
    2,
    ["cortar el pollo", "hervir arroz"])
] //FIXME take it from file.json in the project

module.exports.getRecipes = (req, res) => {
  res.json(recipes);

}
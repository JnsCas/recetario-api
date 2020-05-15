const { v4: uuidv4 } = require('uuid');

function Recipe(name, ingredients, peopleQuantity, steps) {
    this.id = uuidv4();
    this.name = name;
    this.ingredients = ingredients;
    this.peopleQuantity = peopleQuantity;
    this.steps = steps;
    this.score = 0;
}

module.exports = Recipe;
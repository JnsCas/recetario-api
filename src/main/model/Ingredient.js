const { v4: uuidv4 } = require('uuid');

function Ingredient(name, quantityKg) {
  this.id = uuidv4();
  this.name = name;
  this.quantityKg = quantityKg;
}

module.exports = Ingredient;
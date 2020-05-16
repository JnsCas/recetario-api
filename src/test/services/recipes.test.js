const assert = require('assert');
const {
  getRecipesByNameOrIngredient,
  getAllRecipes
} = require('../../main/services/recipes')


describe('Recipes Router', () => {
  it('should return all recipes', () => {
    let result = getAllRecipes();
    assert.strictEqual(result.length, 2);
  });
  it('should return Milanesa recipe', () => {
    const result = getRecipesByNameOrIngredient("milanesa")
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].name, "Milanesa");
  });
  it('should return \'Arroz con pollo\' recipe by  \'Tomate\' ingredient ', () => {
    const result = getRecipesByNameOrIngredient("Tomate")
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].name, "Arroz con pollo");
  });
  it('should return \'Arroz con pollo\' recipe by  \'Cebolla\' ingredient ', () => {
    const result = getRecipesByNameOrIngredient("Cebolla")
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].name, "Arroz con pollo");
  });
});
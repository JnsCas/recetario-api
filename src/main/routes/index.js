const express = require('express')
const { getRecipes, putScore } = require("./recipes");
const router = express.Router()

router.get('/recipes', getRecipes);
router.put('/recipes/:id', putScore)

module.exports = router;
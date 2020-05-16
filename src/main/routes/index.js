const express = require('express')
const { getRecipes } = require("./recipes");
const router = express.Router()

router.get('/recipes', getRecipes);

module.exports = router;
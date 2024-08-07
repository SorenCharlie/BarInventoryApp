const express = require('express');
const router = express.Router();

let ingredients =[];

// Get all ingredients
router.get('/ingredients', (req,res) => {
    res.json(ingredients);

// Get a sinlge ingredients by ID
router.get('/ingedients:id', (req,res) => {
    const ingredients = ingredients.find(i => i.id === parseInt(req.params.id));
    if (ingredients) {
        res.json(ingredients);
    } else {
        res.status(404).send('Ingredient not found');
    }
});   

// Create a new ingredient
router.post ('/ingredients', (req,res) => {
    const ingredients = {
        id: ingredients.length + 1,
        name: req.body.name
    };
    ingredients.push(ingredients);
    res.status(201).json(ingredients);
});

// Update an ingredient
router.put('/ingredient/:id', (req, res)=> { 
    const ingredients = ingredient.find(c => c.id === parseInt(reqparams.id));
    if (ingredients) {
        ingredients.name = req.body.ingredients;
        res.json(ingredients);
    }
    else {
        res.status(404).send('Ingredient not found');
    }
});
// Delete an ingredient
router.delete('/ingredient/:id', (req, res) => {
    const ingredients = ingredients.find(i => i.id === parseInt(req.params.id));
    if (ingredients) {
        const index = ingredients.indexOf(ingredients);
        ingredients.splice(index, 1);
        res.json(ingredients);
    } else {
        res.status(404).send('Ingredient not found');
    }
});

module.exports = router;

});
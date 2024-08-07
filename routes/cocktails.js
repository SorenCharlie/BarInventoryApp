const express = require('express');
const router = express.Router();

let cocktails =[];

// Get all cocktails
router.get('/cocktails', (req, res) => {
    res.json(cocktails);
});

// Get a single cocktail by ID
router.get('/cocktails/:id', (req, res) => {
    const cocktail = cocktails.find(c => c.id === parseInt(req.params.id));
    if(cocktail) {
        res.json(cocktail);
    }else {
        res.status(404).send('Cocktail not found');
    }

});

// Create a new cocktail
router.post ('/cocktails', (req,res) => {
    const cocktails = {
        id: cocktails.length + 1,
        name: req.body.name
    };
    cocktails.push(cocktails);
    res.status(201).json(cocktails);
});

// Update an cocktails
router.put('/cocktails/:id', (req, res)=> { 
    const cocktails = cocktails.find(c => c.id === parseInt(reqparams.id));
    if (cocktails) {
        cocktails.name = req.body.cocktails;
        res.json(cocktails);
    }
    else {
        res.status(404).send('cocktails not found');
    }
});
// Delete an cocktails
router.delete('/cocktails/:id', (req, res) => {
    const cocktails = cocktails.find(i => i.id === parseInt(req.params.id));
    if (cocktails) {
        const index = cocktails.indexOf(cocktails);
        cocktails.splice(index, 1);
        res.json(cocktails);
    } else {
        res.status(404).send('cocktails not found');
    }
});

module.exports = router;
const express = require('express');
// const bodyParser = require('body-parser');
const ingredientRoutes = require('./routes/ingredients');
const coktailRoutes =require('./routes/cocktails');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Bar Inventory API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

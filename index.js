const express = require('express');
const bodyParser = require('body-parser');
const ingredientsRoutes = require('./routes/ingredients');
const cocktailsRoutes = require('./routes/cocktails');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Bar Inventory API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

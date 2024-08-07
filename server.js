const express = require("express");
const session = require("express-session");
const path = require("path");
const sequelize = require("./config/database");
const dotenv = require("dotenv");
// const exphbs = require('express-handlebars');

// Import route handlers
const drinksRoutes = require("./routes/drinksRoutes"); // Adjust the path if needed
const ingredientsRoutes = require("./routes/ingredientsRoutes");
const drinkIngredientsRoutes = require("./routes/drinkIngredientsRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/drinks", drinksRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/drinkIngredients", drinkIngredientsRoutes);

// Handlebars engine setup (commented out for testing without Handlebars)
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
  res.send("Hello, this is the homepage!"); // Sending a simple text response
});

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(
        `Server is running on http://localhost:${process.env.PORT || 3001}`
      );
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

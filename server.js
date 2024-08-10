const express = require("express");
const session = require("express-session");
const path = require("path");
const sequelize = require("./config/database");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");

// Routes
const drinksRoutes = require("./routes/drinksRoutes");
const ingredientsRoutes = require("./routes/ingredientsRoutes");
const drinkIngredientsRoutes = require("./routes/drinkIngredientsRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();

const app = express();

// Cookies
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.SESSION_COOKIE_SECURE === "true" },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/drinks", drinksRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/drinkIngredients", drinkIngredientsRoutes);
app.use("/order", orderRoutes);

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const hbs = exphbs.create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
});

app.get("/", (req, res) => {
  res.render("home");
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

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
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.SESSION_COOKIE_SECURE === "true" },
  })
);

const hbs = exphbs.create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Routes
app.use("/drinks", drinksRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/drinkIngredients", drinkIngredientsRoutes);
app.use("/order", orderRoutes);
app.use("/", authRoutes);

// Middleware to set locals
app.use((req, res, next) => {
  res.locals.logged_in = req.session.logged_in;
  next();
});

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/login"); // Redirect to the login page after logout
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Database synchronization
sequelize
  .sync()
  .then(() => {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

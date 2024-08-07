const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", require("./routes/index"));

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

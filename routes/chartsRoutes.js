const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const drinksData = [
      { name: "Jack and Coke", value: 16 },
      { name: "Margarita", value: 8 },
      { name: "Mojito", value: 6 },
      { name: "Gin and Tonic", value: 4 },
      { name: "Rum and Coke", value: 7 },
    ];
    const drinkNames = drinksData.map((drink) => drink.name);
    const drinkValues = drinksData.map((drink) => drink.value);

    res.render("charts", {
      labels: JSON.stringify(drinkNames),
      data: JSON.stringify(drinkValues),
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

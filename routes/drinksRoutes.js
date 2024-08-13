const express = require("express");
const router = express.Router();
const { Drink } = require("../models");

router.get("/", async (req, res) => {
  try {
    const drinks = await Drink.findAll();
    console.log(drinks);
    res.render("drinks", {
      drinks: drinks.map((drink) => drink.get({ plain: true })),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const drinkController = require("../controllers/drinkController");
router.post("/", drinkController.createDrink);
router.get("/:id", drinkController.getDrinkById);
router.put("/:id", drinkController.updateDrink);
router.delete("/:id", drinkController.deleteDrink);

module.exports = router;

const { Drink, DrinkIngredient, Ingredient } = require("../models");
const sequelize = require("../config/database");

const orderDrink = async (req, res) => {
  const { drinkId } = req.body;

  try {
    // Start a transaction
    const result = await sequelize.transaction(async (transaction) => {
      // Fetch the drink and associated ingredients
      const drink = await Drink.findByPk(drinkId, {
        include: {
          model: Ingredient,
          through: { attributes: ["quantity"] },
        },
        transaction,
      });

      if (!drink) {
        return res.status(404).json({ error: "Drink not found" });
      }

      // Fetch associated DrinkIngredients
      const drinkIngredients = await DrinkIngredient.findAll({
        where: { drinkId },
        transaction,
      });

      if (drinkIngredients.length === 0) {
        return res
          .status(404)
          .json({ error: "No ingredients found for this drink" });
      }

      // Process the order: subtract ingredient quantities
      for (const drinkIngredient of drinkIngredients) {
        const ingredient = await Ingredient.findByPk(
          drinkIngredient.ingredientId,
          { transaction }
        );
        if (ingredient) {
          ingredient.quantity -= drinkIngredient.quantity;
          await ingredient.save({ transaction });
        }
      }

      return { message: "Order processed successfully" };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ error: "Failed to process order" });
  }
};

module.exports = { orderDrink };

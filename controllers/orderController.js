const { Drink, DrinkIngredient, Ingredient } = require("../models");
const sequelize = require("../config/database");

const orderDrink = async (req, res) => {
  const orders = req.body; // Expecting { "Mojito": 2, "Old Fashioned": 1 }

  try {
    // Start a transaction
    await sequelize.transaction(async (transaction) => {
      for (const [drinkName, quantity] of Object.entries(orders)) {
        // Find the drink by name
        const drink = await Drink.findOne({
          where: { name: drinkName },
          include: {
            model: Ingredient,
            through: { attributes: ["quantity"] },
          },
          transaction,
        });

        if (!drink) {
          throw new Error(`Drink ${drinkName} not found`);
        }

        // Fetch associated DrinkIngredients
        const drinkIngredients = await DrinkIngredient.findAll({
          where: { drinkId: drink.id },
          transaction,
        });

        if (drinkIngredients.length === 0) {
          throw new Error(`No ingredients found for drink ${drinkName}`);
        }

        // Process the order: subtract ingredient quantities
        for (const drinkIngredient of drinkIngredients) {
          const ingredient = await Ingredient.findByPk(
            drinkIngredient.ingredientId,
            { transaction }
          );
          if (ingredient) {
            ingredient.quantity -= drinkIngredient.quantity * quantity;
            await ingredient.save({ transaction });
          }
        }
      }
    });

    res.status(200).send("Order processed successfully");
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).send("Failed to process order");
  }
};

const getOrderData = async (req, res) => {
  try {
    const orders = await Drink.findAll({
      attributes: [
        "name",
        [sequelize.fn("COUNT", sequelize.col("Drink.id")), "count"],
      ],
      include: [
        {
          model: DrinkIngredient,
          attributes: [],
        },
      ],
      group: ["Drink.id"],
      raw: true,
    });

    res.json(orders);
  } catch (error) {
    console.error("Error fetching order data:", error);
    res.status(500).json({ error: "Failed to fetch order data" });
  }
};

module.exports = { orderDrink, getOrderData };

function addDrinkField(name, quantity) {
  const container = document.getElementById("drinkOrders");
  const div = document.createElement("div");
  div.innerHTML = `
      <label for="${name}">${name}:</label>
      <input type="number" id="${name}" name="${name}" value="${quantity}" min="0" required>
    `;
  container.appendChild(div);
}

// Example: adding fields for three drinks
addDrinkField("Mojito", 0);
addDrinkField("Rum and Coke", 0);
addDrinkField("Margarita", 0);
addDrinkField("Jack and Coke", 0);
addDrinkField("Gin and Tonic", 0);

document
  .getElementById("orderForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
      if (!data[key]) {
        data[key] = 0;
      }
      data[key] += parseInt(value, 10);
    });

    try {
      const response = await fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Order processed successfully");

        document.querySelectorAll("#drinkOrders input").forEach((input) => {
          input.value = 0;
        });
      } else {
        alert("Failed to process order");
      }
    } catch (error) {
      console.error("Error processing order:", error);
      alert("An error occurred while processing your order");
    }
  });

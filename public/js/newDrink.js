document.addEventListener("DOMContentLoaded", () => {
  const newDrinkForm = document.getElementById("newDrinkForm");

  newDrinkForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(newDrinkForm);
    const formProps = Object.fromEntries(formData);

    await fetch("/drinks/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formProps),
    });

    const data = await fetchDrinkOrderData();
    renderChart(data);
  });
});

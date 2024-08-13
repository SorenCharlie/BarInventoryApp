async function fetchDrinkOrderData() {
  const response = await fetch("/orders/data");
  const data = await response.json();
  return data;
}

function renderChart(data) {
  const ctx = document.getElementById("drinkOrdersChart").getContext("2d");
  const drinkNames = data.map((drink) => drink.name);
  const drinkCounts = data.map((drink) => drink.count);

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: drinkNames,
      datasets: [
        {
          label: "# of Orders",
          data: drinkCounts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchDrinkOrderData();
  renderChart(data);
});

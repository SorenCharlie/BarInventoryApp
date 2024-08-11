document.addEventListener("DOMContentLoaded", () => {
  fetch("/ingredients")
    .then((response) => response.json())
    .then((data) => {
      const listGroup = document.querySelector(".list-group");
      listGroup.innerHTML = ""; // Clear existing content

      data.forEach((ingredient) => {
        const listItem = document.createElement("a");
        listItem.href = "#";
        listItem.className = "list-group-item list-group-item-action";

        listItem.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${ingredient.name}</h5>
              <small>Quantity: ${ingredient.quantity}</small>
            </div>
          `;

        listGroup.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error:", error));
});

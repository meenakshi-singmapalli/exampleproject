async function loadTable() {
  const response = await fetch("data.json");
  const data = await response.json();

  const tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";

  data.forEach(item => {
    let row = document.createElement("tr");

    for (let value of Object.values(item)) {
      let cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    }

    row.addEventListener("click", () => {
      document.querySelectorAll("#dataTable tbody tr")
        .forEach(r => r.classList.remove("selected"));
      row.classList.add("selected");
    });

    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", loadTable);

import { openingHours } from "../utils/opening.hours";

const timeSelect = document.querySelector("#time");

// Gera as opções no select
export function populateHours() {
  timeSelect.innerHTML = ""; // limpa antes de renderizar

  openingHours.forEach(hour => {
    const option = document.createElement("option");
    option.value = hour;
    option.textContent = hour;

    timeSelect.appendChild(option);
  });
}


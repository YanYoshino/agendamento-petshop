import { openingHours } from "../utils/opening.hours";

const bookedHours = ["14:00"]; // você vai buscar isso do backend (exemplo até eu fazer)
const timeSelect = document.querySelector("#time");

// Gera as opções no <select>
export function populateHours() {
  timeSelect.innerHTML = ""; // limpa antes de renderizar

  openingHours.forEach(hour => {
    const option = document.createElement("option");
    option.value = hour;
    option.textContent = hour;

    // Se já está reservado, desabilita
    if (bookedHours.includes(hour)) {
      option.disabled = true;
      option.textContent = `${hour} (indisponível)`;
    }

    timeSelect.appendChild(option);
  });
}


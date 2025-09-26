import dayjs from "dayjs";

// Seleciona as UL de cada período
const periodMorning = document.querySelector(".morning .ul");
const periodAfternoon = document.querySelector(".afternoon .ul");
const periodNight = document.querySelector(".night .ul");

export function scheduleShow({ dailySchedules }) {
  try {
    // Limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      // Cria o li
      const li = document.createElement("li");
      li.classList.add("list");

      li.setAttribute("data-id", schedule.id)

      // Cria a div
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
      // Cria a hora
      const hour = document.createElement("span");
      hour.classList.add("hour");
      hour.textContent = dayjs(schedule.when).format("HH:mm");
      // Cria o animal
      const animal = document.createElement("span");
      animal.classList.add("animal");
      animal.textContent = schedule.pet;
      // Cria o nome
      const name = document.createElement("small");
      name.classList.add("name");
      name.textContent = ` / ${schedule.name}`;

      // Junta o nome ao lado do animal
      animal.appendChild(name);
      infoDiv.append(hour, animal);

      // Cria a categoria
      const category = document.createElement("p");
      category.classList.add("category");
      category.textContent = schedule.description;

      // Cria o botão remover
      const remove = document.createElement("span");
      remove.classList.add("remove");
      remove.textContent = "Remover agendamento";

      // Monta o li completo
      li.append(infoDiv, category, remove);

      // Decide em qual lista vai
      const hourValue = dayjs(schedule.when).hour();

      if (hourValue < 12) {
        // manhã
        if (periodMorning.children.length > 0) {
          // só adiciona se já existe outro item
          li.classList.add("border-top"); 
        }
        // Adciona a li toda no periodo
        periodMorning.appendChild(li);

      } else if (hourValue >= 12 && hourValue < 18) {
        // tarde
        if (periodAfternoon.children.length > 0) {
          // só adiciona se já existe outro item
          li.classList.add("border-top");
        }
        // Adciona a li toda no periodo
        periodAfternoon.appendChild(li);

      } else {
        // noite
        if (periodNight.children.length > 0) {
          // só adiciona se já existe outro item
          li.classList.add("border-top");
        }
        // Adciona a li toda no periodo
        periodNight.appendChild(li);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos.");
    console.error(error);
  }
}

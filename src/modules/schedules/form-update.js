import dayjs from "dayjs";

export function updateAvailableTimes(dailySchedules) {
    // Transforma a lista de agendamentos em uma lista só com horários (HH:mm)
    const bookedTimes = dailySchedules.map(schedule => {
        return dayjs(schedule.when).format("HH:mm");
    });

    const timeSelect = document.querySelector("#time"); 
    const timeOptions = timeSelect.querySelectorAll("option");

    // Variavel para definit primeiro valor disponivel
    let firstAvailableSet = false;

    // Percorre todas as opções de horário
    timeOptions.forEach(option => {
        const optionValue = option.value;

        if (optionValue === "") {
            return;
        }

        // Se o horário já está reservado (bookedTimes), desabilita essa opção
        if (bookedTimes.includes(optionValue)) {
            option.disabled = true;
            option.textContent = `${optionValue} - Agendado`;
        } else {
            // Se não estiver, garante que ela esteja habilitada
            option.disabled = false;
            option.textContent = optionValue;

            // Se ainda não escolhemos um horário disponível define este como o valor padrão do <select>
            if (!firstAvailableSet) {
                timeSelect.value = optionValue;
                firstAvailableSet = true; 
            }
        }
    });

    // Se tudo estiver marcado garante que fique sem opção
    if (!firstAvailableSet) {
        timeSelect.value = "";
    }
}
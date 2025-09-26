import { scheduleFetchByDay } from "../../service/schedule-fetch-by-day.js";
import { updateAvailableTimes } from "./form-update.js"; 
import { scheduleShow } from "./show.js";

const selectedDate = document.getElementById("date-schedule");
const selectedDateHome = document.getElementById("date");


// Carrega toda vez que a data for alterada pelo usuário
selectedDate.addEventListener("change", schedulesDay);

// Função que chama updateAvailableTimes
export async function schedulesDay() {
    try {
        const date = selectedDate.value;
        const dailySchedules = await scheduleFetchByDay({ date });

        // Atualiza o formulário, bloqueando os horários ocupados
        updateAvailableTimes(dailySchedules);
        
    } catch (error) {
        console.error(error);
        alert("Não foi possível carregar os agendamentos do dia.");
    }
}

// Carrega toda vez que a data for alterada pelo usuário
selectedDateHome.addEventListener("change", schedulesHome);

// função que chama scheduleShow 
export async function schedulesHome() {
    try {
        const date = selectedDateHome.value;
        const dailySchedulesHome = await scheduleFetchByDay({date});

        scheduleShow({ dailySchedules: dailySchedulesHome });
    } catch (error) {
        console.error(error);
        alert("Não foi possível carregar os agendamentos do dia."); 
    }
}
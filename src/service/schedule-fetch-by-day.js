import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {
        // Faz a requisição para a api
        const response = await fetch(`${apiConfig.baseURL}/schedules`);

        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API.');
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));

        return dailySchedules;

    } catch (error) {
        console.error("Falha na requisição:", error);
        alert("Não foi possível buscar os agendamentos do dia selecionado");
    }
}
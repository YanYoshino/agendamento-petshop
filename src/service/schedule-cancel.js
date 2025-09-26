import { apiConfig } from "./api-config.js";

export async function scheduleCancel({id}) {
    console.log("Tentando cancelar o ID:", id);
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE" 
        })
        alert("Agendamento cancelado")
    } catch (error) {
        console.log(error);
        alert("Não foi possível cancelar o agendamento. Tente novamente mais tarde")
    }
}
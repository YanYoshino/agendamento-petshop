import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, pet, description, when}) {
    try{
        // Faz a requisição para enviar os dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({ id, name, pet, description, when }),
        })
        // Exibe mensagem de agendamento realizado.
        alert("Agendamento realizado com sucesso")
    }catch(error){
        console.log(error);
        alert("Não foi possível agendar. Tente novamnete mais tarde.")
    }
}
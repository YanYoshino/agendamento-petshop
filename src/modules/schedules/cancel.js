import { scheduleCancel } from "../../service/schedule-cancel.js";
import { schedulesHome } from "./load.js";

const lists = document.querySelectorAll(".morning ul, .afternoon ul, .night ul");

// Gera o evento click para cada lista (Manhã, Tarde e Noite)
lists.forEach((list) => {
    // Captura o evento de clique na lista.
    list.addEventListener("click", async (event) => {
        if(event.target.classList.contains("remove")){
            // Obtém o li pai do elemento clicado
            const item = event.target.closest("li");

            // Pega o id do agendamento pra remover.
            const { id } = item.dataset

            // Confirma que o id foi selecionado.
            if(id){
                // Confirma que o usuario quer cancelar
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
                
                if (isConfirm){
                    // Faz a requisição n API para cancelar
                    await scheduleCancel({ id })
                    // Recarrega os agendamentos
                    schedulesHome()
                }
            }
        }
    })
})
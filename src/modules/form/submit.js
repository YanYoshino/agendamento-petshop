import dayjs from "dayjs";
import { populateHours } from "./format-time";
import { scheduleNew } from "../../service/schedule-new";



const form = document.querySelector("form");
const clientName = document.getElementById("tutorName");
const petName = document.getElementById("petName");
const phoneNumber = document.getElementById("phone");
const descriptionInput = document.getElementById("description");
const selectedDate = document.getElementById("date-schedule");
const selectedDateHome = document.getElementById("date");



// Formatando a data para o dia de hoje dos inputs
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = inputToday;
selectedDate.min = inputToday;
selectedDateHome.value = inputToday;
selectedDateHome.min = inputToday;

// Formatando hora
populateHours();


form.onsubmit = async (event) => {
    // Previne o carrefamento
    event.preventDefault();

    try {
        // Recupera o nome
        const name = clientName.value.trim();
        if(!name){
            return alert("Informe seu nome");
        }
        // Recupera o nome do pet
        const pet = petName.value.trim();
        if(!pet){
            return alert("Informe o nome do seu animal");
        }
        // Recupera o numero
        const phone = phoneNumber.value.trim();
        if(!phone){
            return alert("Informe seu numero");
        }
        // Recupera a descrição
        const description = descriptionInput.value.trim()
        if(!description){
            return alert("Informe o serviço")
        }

        // Recupera a hora
        const selectedTime = document.getElementById("time").value;
        if (!selectedTime) {
            return alert("Selecione um horário");
        }
        // Somente a hora
        const [hour] = selectedTime.split(":");
        // Adciona a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour");
        // Cria um id
        const id = new Date().getTime().toString();
  
        await scheduleNew({
            id,
            name,
            pet,
            description,
            when,
        })

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error);
    }
}
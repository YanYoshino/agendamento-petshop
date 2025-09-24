import dayjs from "dayjs";
import { populateHours } from "./format-time";


const form = document.querySelector("form");
const selectedDate = document.getElementById("date-schedule");
const selectedDateHome = document.getElementById("date")


// Formatando a data para o dia de hoje dos inputs
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = inputToday;
selectedDate.min = inputToday;
selectedDateHome.value = inputToday;
selectedDateHome.min = inputToday;

// Formatando hora
populateHours();

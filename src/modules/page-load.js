import { populateHours } from "./form/format-time.js";
import { schedulesDay, schedulesHome } from "./schedules/load.js";

document.addEventListener('DOMContentLoaded', () => {
    populateHours();
    schedulesDay();
    schedulesHome();
});
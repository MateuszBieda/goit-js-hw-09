import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker")
const btnStart = document.querySelector('button[data-start]');
btnStart.disabled=true;

let startDate= new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]); 
      if(selectedDates[0].getTime()<startDate.getTime()){
        window.alert("Please choose a date in the future");
      }
      else btnStart.disabled=false;;
    },
};

const fp = flatpickr(myInput,options);






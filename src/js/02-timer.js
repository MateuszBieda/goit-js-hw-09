import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker")
const btnStart = document.querySelector('button[data-start]');
const secondsValue = document.querySelector('.value[data-seconds]');
const minutesValue = document.querySelector('.value[data-minutes]');
const hoursValue = document.querySelector('.value[data-hours]');
const daysValue = document.querySelector('.value[data-days]');



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
      else {btnStart.disabled=false;
        const ms = selectedDates[0].getTime()-startDate.getTime();
        convertMs(ms);
        btnStart.addEventListener("click",showDate);

        function showDate(){ 
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24; 
        daysValue.textContent= Math.floor(ms / day);
        hoursValue.textContent= Math.floor((ms % day) / hour);
        minutesValue.textContent= Math.floor(((ms % day) % hour) / minute);
        secondsValue.textContent= Math.floor((((ms % day) % hour) % minute) / second);
        };
    }
    },
};

const fp = flatpickr(myInput,options);

let ms = selectedDates[0].getTime()-startDate.getTime();

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return console.log({ days, hours, minutes, seconds });
  }
  
//console.log(convertMs(ms)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function addLeadingZero(value){
       return value.toString().padStart('2',0);
  };

//btnStart.addEventListener("click",counter);



btnStart.addEventListener("click",showDate);

 function showDate(){  
    hoursValue.textContent=56;
 };



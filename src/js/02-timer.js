import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker")
const btnStart = document.querySelector('button[data-start]');
const secondsValue = document.querySelector('.value[data-seconds]');
const minutesValue = document.querySelector('.value[data-minutes]');
const hoursValue = document.querySelector('.value[data-hours]');
const daysValue = document.querySelector('.value[data-days]');
let timerId = null;


btnStart.disabled=true;

function addLeadingZero(value){

  return String(value).padStart(2, '0');

};

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

  return { days, hours, minutes, seconds };
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      let currentDate=new Date();
      let currentDateMs = currentDate.getTime();
      let remainingTime = selectedDates[0].getTime()-currentDateMs;

      if(remainingTime<1000){
        window.alert("Please choose a date in the future");
        return
      }
      btnStart.disabled=false;

      const  showTime =()=>  {
         
        const futureDate = selectedDates[0];
        let currentDate = new Date();
        
        let remainingTime;
        
        remainingTime= futureDate.getTime()-currentDate.getTime();
        
        //getDate() 
        const { days, hours, minutes, seconds } = convertMs(remainingTime); 

        daysValue.textContent=addLeadingZero(days);
        hoursValue.textContent= addLeadingZero(hours);
        minutesValue.textContent= addLeadingZero(minutes);
        secondsValue.textContent= addLeadingZero(seconds);
        
      if (remainingTime<1000)
       {
       clearInterval(timerId);
      }
      } 
        btnStart.addEventListener("click", () => {
          timerId = setInterval(() => {

            showTime();

          }, 1000);
        });



     
}
};

const fp = flatpickr(myInput,options);

// function getDate(){
//   let currentDate=new Date();
//   return currentDate;
//  }




//btnStart.addEventListener("click",counter);



//btnStart.addEventListener("click",showDate);

// function showDate(){  
//    hoursValue.textContent=56;
 //};
// function counter () {

//     if (secondsValue.textContent===0){
//         secondsValue.textContent=59;
//     }
// }
// ;



    //  if(timerId){           
    //    clearInterval(timerId);
    //  }
    //  else {
    //  timerId = setInterval(showDate, 1000)
    // ;}


    //btnStart.addEventListener("click", showDate);
  

const btnStart= document.querySelector('button[data-start]');
const btnStop= document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
const disableButton = () => {
    btnStart.disabled=true;
  };
const activateButton = ()=> {
    btnStart.disabled=false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const onClick  = () =>
  document.body.style.backgroundColor=getRandomHexColor()
;


btnStart.addEventListener("click", () => {
timerId=setInterval(onClick, 1000 );
});
btnStart.addEventListener ("click",disableButton);

btnStop.addEventListener("click", () => {
    clearInterval(timerId);
  });
  btnStop.addEventListener ("click",activateButton);

const form = document.querySelector(".form");



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) =>{ 
  setInterval (()=> {
  if (shouldResolve) {
    // Fulfill
    resolve({position, delay})
  } else {
    // Reject
    reject({position, delay})
  }
}, delay)
})
}

function onSubmit (event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let i = 0; i<amount; i += 1) {
  let position = i + 1;
  let actualDelay = delay + step * i;

  createPromise(position, actualDelay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  }
}


  form.addEventListener('submit', onSubmit);
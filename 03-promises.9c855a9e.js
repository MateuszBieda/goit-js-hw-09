const e=document.querySelector(".form");function o(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setInterval((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(t){t.preventDefault();const n=Number(e.elements.delay.value),l=Number(e.elements.step.value);for(let e=0;e<amount;e+=1){o(e+1,n+l*e).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.9c855a9e.js.map

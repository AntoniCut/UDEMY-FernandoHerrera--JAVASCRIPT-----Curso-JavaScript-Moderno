//  *******************************************************************
//  **********  07-advanced/src/concepts/01-environments.js  **********
//  *******************************************************************


import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { demoComponent } from './src/concepts/00-demo.js'
import { envirounmentsComponent } from './src/concepts/01-environments.js'
import { CallbacksComponent } from './src/concepts/02-callbacks.js'
import { PromiseComponent } from './src/concepts/03-promises.js'



document.querySelector('#app').innerHTML = `
  
<div>
    
   <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    
    <h1> 07 Advanced - JavaScript Moderno! </h1>
    
    <h2> -----  Callbacks, Promesas y Generadores!  ----- </h2>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

    <div id="card">
      
    </div>

    
  </div>
`

setupCounter(document.querySelector('#counter'))


console.warn('*****  07 Advanced  *****');

const element = document.getElementById('card');

//demoComponent(element);
//envirounmentsComponent(element);
//CallbacksComponent(element);
PromiseComponent(element);
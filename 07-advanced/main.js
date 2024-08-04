//  *******************************************
//  **********  07-advanced/main.js  **********
//  *******************************************


import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { demoComponent } from './src/concepts/00-demo.js'
import { envirounmentsComponent } from './src/concepts/01-environments.js'
import { CallbacksComponent } from './src/concepts/02-callbacks.js'
import { PromiseComponent } from './src/concepts/03-promises.js'
import { PromiseAllComponent } from './src/concepts/04-promises-all.js'
import { PromiseRaceComponent } from './src/concepts/05-promises-race.js'
import { AsyncComponent } from './src/concepts/06-async.js'
import { AsyncAwaitComponent } from './src/concepts/07-async-await.js'
import { AsyncAwait2Component } from './src/concepts/08-async-await-2.js'
import { ForAwaitComponent } from './src/concepts/09-for-await.js'



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

    <div id="envirounment">  </div>
    <div id="callback">  </div>
    <div id="promise">  </div>
    <div id="promiseAll">  </div>
    <div id="promiseRace">  </div>
    <div id="async">  </div>
    <div id="asyncAwait">  </div>
    <div id="asyncAwait2">  </div>
    <div id="forAwait">  </div>
        
  </div>
`

setupCounter(document.querySelector('#counter'))


console.warn('*****  07 Advanced  *****');

const envirounment = document.getElementById('envirounment');
const callback = document.getElementById('callback');
const promise = document.getElementById('promise');
const promiseAll = document.getElementById('promiseAll');
const promiseRace = document.getElementById('promiseRace');
const async = document.getElementById('async');
const asyncAwait = document.getElementById('asyncAwait');
const asyncAwait2 = document.getElementById('asyncAwait2');
const forAwait = document.getElementById('forAwait');

//demoComponent(element);
// envirounmentsComponent(envirounment);
// CallbacksComponent(callback);
// PromiseComponent(promise);
// PromiseAllComponent(promiseAll);
// PromiseRaceComponent(promiseRace);
// AsyncComponent(async);
// AsyncAwaitComponent(asyncAwait);
//AsyncAwait2Component(asyncAwait2);
ForAwaitComponent(forAwait);
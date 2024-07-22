//  ********************************
//  **********  /main.js  **********
//  ********************************


import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { envirounmentsComponent } from './src/concepts/01-environments'
import { callbacksComponent } from './src/concepts/02-callbacks'
import { promisesComponent } from './src/concepts/03-promises'
import { promiseRaceComponent } from './src/concepts/04-promise-race'
import { asyncComponent } from './src/concepts/05-async'




document.querySelector('#app').innerHTML = `
 
    <div class="layout">
        
        <header class="header">

            <a href="https://vitejs.dev" target="_blank">
                <img src="${viteLogo}" class="logo" alt="Vite logo" />
            </a>
            
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
            </a>

        </header>
            

        <main class="main">
        
            <h1> 07 - ADVANCED - Hello JavaScript con Vite! </h1>
            
            <div class="card">
            
                <!--  *****  Renderizado de la Aplicación  *****  -->

            </div>
        
        </main>
    
             
    </div>
`

const element = document.querySelector('.card');


//envirounmentsComponent(element);
//callbacksComponent(element);
//promisesComponent(element);
//promiseRaceComponent(element);

asyncComponent(element);



//console.log('Hola mundo!!!');


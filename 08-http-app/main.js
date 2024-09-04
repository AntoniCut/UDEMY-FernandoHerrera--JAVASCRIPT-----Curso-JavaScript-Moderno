//  ********************************************
//  **********  /08-http-app/main.js  **********
//  ********************************************


import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { BreakingbadApp } from './src/breakingbad/breakingbad-app'


document.querySelector('#app').innerHTML = `
  
    <div id="app">
        
        <header class="header">

            <a href="https://vitejs.dev" target="_blank">
                <img src="${viteLogo}" class="logo" alt="Vite logo" />
            </a>
            
            <h1> 08 - HTTP APP!!! </h1>
            
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
            </a>

        </header>
        
        <br> <br> <h2> BREAKING BAG APP !!! </h2>

        <main class="card">
            
        </main>
            
    </div>
`

const element = document.querySelector('.card');
BreakingbadApp(element);

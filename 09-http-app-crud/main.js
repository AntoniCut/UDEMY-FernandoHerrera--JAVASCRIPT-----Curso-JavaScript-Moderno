//  *************************************************
//  **********  /09-http-app-crud/main.js  **********
//  *************************************************


import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { UsersApp } from './src/users/users-app'


//  ----------  Renderizado Principal de la Aplicacíon  -----
document.querySelector('#app').innerHTML = `
             
    <header class="header">

        <a href="https://vitejs.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
            
        <h1> 09 - HTTP APP CRUD !!! </h1>
            
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>

    </header>
   
    <main class="card">
            
    </main>

`;


const element = document.querySelector('.card');
UsersApp(element);

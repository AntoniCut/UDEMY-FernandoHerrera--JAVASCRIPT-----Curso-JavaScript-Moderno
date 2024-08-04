//  *********************************************************
//  **********  /src/concepts/05-promises-race.js  **********
//  *********************************************************


import { heroes } from "../data/heroes";


/**
 * -----  functión --  DemoComponent -----
 * @param {HTMLDivElement} element 
 */

export const PromiseRaceComponent = (element) => {

    console.warn('\n-----  05-promises-race  -----');

    element.innerHTML = 'Loading';

    const renderValue = (value) => {
        element.innerHTML = '<h1> 05 - Promises Race </h1>';
        element.innerHTML += ` <h2> ${value} </h2>`;
    }


    //  **********  Promise Race ejecuta la Promesa que se ejecuta antes  **********
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then( renderValue )

}



//  --------------------------------------------
//  ----------  Creación de Promesas  ----------
//  --------------------------------------------

//  -----  Funciones que regresan promesas  -----


//  ----------  Promesa Lenta Duración  ----------
const slowPromise = () => new Promise( resolve => {
    
    setTimeout(()=> {
        resolve('Slow Promise');
    }, 2000);

});


//  ----------  Promesa Media Duración  ----------
const mediumPromise = () => new Promise( resolve => {
    
    setTimeout(()=> {
        resolve('Medium Promise');
    }, 1500);

});


//  ----------  Promesa Larga Duración  ----------
const fastPromise = () => new Promise( resolve => {
    
    setTimeout(()=> {
        resolve('Fast Promise');
    }, 1000);

});


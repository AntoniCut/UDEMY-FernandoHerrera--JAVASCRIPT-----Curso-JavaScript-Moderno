//  *****************************************************************
//  **********  /src/concepts/08-async-await-2.js  ******************
//  *****************************************************************


import { heroes } from "../data/heroes";


/**
 * -----  functión --  DemoComponent -----
 * @param {HTMLDivElement} element 
 */

export const AsyncAwait2Component = async (element) => {

    console.warn('\n-----  08-async-await-2  -----');

    element.innerHTML = '<h1> 08 - Async Await - No Secuenciales </h1>';

    console.time('Start');

    //  -----  Se Ejecutan Secuencialmente  ------
    //const value1 = await slowPromise();
    //const value2 = await mediumPromise();
    //const value3 = await fastPromise();

    //  -----  Se Ejecutan todas a la vez  -----
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML += `
        value1: ${value1} <br>
        value2: ${value2} <br>
        value3: ${value3} <br>
    
    `;

    console.timeEnd('Start');

}


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


// const findHero = async (id) => {

//     const hero = heroes.find(hero => hero.id === id);

//     if (!hero) throw `Hero with id ${id} not found`;

//     return hero;

// }







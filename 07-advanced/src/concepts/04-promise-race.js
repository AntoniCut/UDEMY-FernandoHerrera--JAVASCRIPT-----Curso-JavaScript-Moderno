//  *****************************************************
//  **********  /src/concepts/promise-race.js  **********
//  *****************************************************


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseRaceComponent = (element) => {

    console.warn('promiseRaceComponent');

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {

        element.innerHTML = value;
    }

    
    //  ----------  Promise RACE  ----------
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    .then( renderValue);

    
}


//  --------------------------------------------
//  ----------  Creación de Promesas  ----------
//  --------------------------------------------


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
    }, 3000);

});
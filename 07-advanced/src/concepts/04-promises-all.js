//  ********************************************************
//  **********  /src/concepts/04-promises-all.js  **********
//  ********************************************************


import { heroes } from "../data/heroes";


/**
 * -----  functión --  DemoComponent -----
 * @param {HTMLDivElement} element 
 */

export const PromiseAllComponent = (element) => {

    console.warn('\n-----  04-promises-all  -----');


    const renderHero = (hero) => {
        element.innerHTML += '<h1> 04 - Promises All </h1>';
        element.innerHTML += hero.name;
    }


    const renderTwoHeros = (hero1, hero2) => {
        element.innerHTML += '<h1> 04 - Promises All </h1>';
        element.innerHTML += ` <h3> ${hero1.name} </h3> <h3> ${hero2.name} </h3> `;

    }


    const renderError = (error) => {
        element.innerHTML += '<h1> 04 - Promises All </h1>';
        element.innerHTML += ` <h2> Error: </h2> <h3> ${error}</h3> `;
    }


    const id1 = '5d86371f25a058e5b1c8a65e';            //  Capitan America
    const id2 = '5d86371f233c9f2425f16916';             //  Black Widow

    
    //  **********  Promise All  **********

    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then( ([ hero1, hero2 ]) => renderTwoHeros(hero1, hero2))
    .catch(renderError);


}


/**
 * 
 * @param {String*} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found.`);
    });
}




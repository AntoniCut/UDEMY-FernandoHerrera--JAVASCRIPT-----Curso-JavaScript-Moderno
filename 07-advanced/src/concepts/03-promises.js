//  ****************************************************
//  **********  /src/concepts/03-promises.js  **********
//  ****************************************************


import { heroes } from "../data/heroes";


/**
 * -----  functión --  DemoComponent -----
 * @param {HTMLDivElement} element 
 */

export const PromiseComponent = (element) => {

    console.warn('\n-----  03-promises  -----');

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = ` <h2> Error: </h2> <h3> ${error}</h3> `;
    }

    const id1 = '5d86371f25a058e5b1c8a65e-';            //  Capitan America
    const id2 = '5d86371f233c9f2425f16916';             //  Black Widow

    findHero(id1)
        .then(renderHero)
        .catch(renderError)

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
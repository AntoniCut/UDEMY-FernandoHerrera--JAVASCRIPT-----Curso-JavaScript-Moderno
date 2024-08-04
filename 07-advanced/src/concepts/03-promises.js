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

    element.innerHTML += '<h1> 03 - Promises </h1>';

    const renderHero = (hero) => { element.innerHTML += hero.name; }


    const renderTwoHeros1 = (hero1, hero2) => {
        element.innerHTML += ` <h2> Forma 1 - Promises Hell </h2> <h3> ${hero1.name} </h3> <h3> ${hero2.name} </h3> `;
    }

    const renderTwoHeros2 = (hero1, hero2) => {
        element.innerHTML += ` <h2> Forma 2 - Promises Hell </h2> <h3> ${hero1.name} </h3> <h3> ${hero2.name} </h3> `;
    }


    const renderError = (error) => { element.innerHTML += ` <h2> Error: </h2> <h3> ${error}</h3> `; }


    const id1 = '5d86371f25a058e5b1c8a65e';            //  Capitan America
    const id2 = '5d86371f233c9f2425f16916';             //  Black Widow


    //  **********  Forma 1  **********
    findHero(id1)

        .then((hero1) => {

            findHero(id2)

                .then((hero2) => {
                    renderTwoHeros1(hero1, hero2);
                })
                .catch(renderError);
        })

        .catch(renderError);


    //  **********  Forma 2  **********


    let hero1;

    findHero(id1)

        .then(hero => {

            hero1 = hero;
            return findHero(id2);

        }).then(hero2 => {

            renderTwoHeros2(hero1, hero2);
        })

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




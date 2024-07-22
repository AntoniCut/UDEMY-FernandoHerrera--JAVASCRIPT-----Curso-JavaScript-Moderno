//  *************************************************
//  **********  /src/concepts/promises.js  **********
//  *************************************************

import { heroes } from "../data/heroes";


/**
 * -----  función  --  promisesComponent  -----
 * @param {HTMLDivElement} element 
 */

export const promisesComponent = (element) => {

    console.warn("-----  promiseComponent  -----");


    /**
     * -----  Renderizar el nombre del Hero  -----
     * @param {Object} hero 
     */

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }


    /**
     * -----  Renderiza el nombre de 2 Heroes  -----
     * @param {Object} hero1 
     * @param {Object} hero2 
     */

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3> ${hero1.name} </h3>
            <h3> ${hero2.name} </h3>
        `;
    }

    /**
     * -----  Renderiza el Error  -----
     * @param {String} error 
     */

    const renderError = (error) => {
        element.innerHTML = `<h1> Error: </h1> <h3> ${error} </h3> `;
    }


    /**
     * -----  Funcion que resetea el DOM  -----
     * @param {String*} error 
     */
    const renderReset = (error) => {

        setTimeout(() => {
            element.innerHTML = '';
        }, 5000);


    }


    const id1 = "5d86371f25a058e5b1c8a65e";         //  Capitan America
    const id2 = "5d86371f233c9f2425f16916";         //  Black Widow

    /*
    //  -------------------------------------------------
    //  -----  ejecución de las promesas - Forma 1  -----
    //  -------------------------------------------------
    findHero(id1)

        .then((hero1) => {

            findHero(id2)
                .then(hero2 => {
                    renderTwoHeroes(hero1, hero2)
                })
                .catch(renderError);
        })                        //  identico a  -----  .then( superHero => renderHero(superHero))

        .catch(renderError)                      //  identico a  -----  .catch(error => renderError(error))
        .finally(renderReset);
    */

    /*
    //  -------------------------------------------------
    //  -----  ejecución de las promesas - Forma 2  -----
    //  -------------------------------------------------
    let hero1;

    findHero(id1)
        .then(hero => {
            hero1 = hero;
            return findHero(id2);
        }).then(hero2 => {
            renderTwoHeroes(hero1, hero2);
        })
        .catch(renderError)
        .finally(renderReset);
    */


    //  -----------------------------------------------------
    //  -----  ejecución de las promesas - PROMISE-ALL  -----
    //  -----------------------------------------------------

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch( renderError)
    .finally( renderReset);




}



/**
 * -----  función  --  Buscar un Heroe con una promesa  -----
 * @param {String} id 
 * @returns {Promise<Object>}
 */

const findHero = (id) => {

    //  -----  se ejecuta la promesa y luego se hace el return de esta  -----
    return new Promise((resolve, reject) => {

        //  -----  cuerpo de la promesa  -----
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);

    });

}
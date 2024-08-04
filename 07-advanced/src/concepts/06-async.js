//  *********************************************************
//  **********  /src/concepts/06-async.js  ******************
//  *********************************************************


import { heroes } from "../data/heroes";


/**
 * -----  functión --  DemoComponent -----
 * @param {HTMLDivElement} element 
 */

export const AsyncComponent = (element) => {

    console.warn('\n-----  06-async  -----');

    element.innerHTML = '<h1> 06 - Async </h1>';
    const id1 = '5d86371fd55e2e2a30fe1ccb--';             //  Black Panther

    console.log('Inicio Componente');

    findHero(id1)
        .then( (name) => element.innerHTML += name)
        //.then(console.log)
        .catch((error) => element.innerHTML += error);

    console.log('Fin Componente');
}



/**
 * --  Función Asincrona  --  Siempre se Resuelve con Exito.
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) throw `Hero width id ${id} not found`;
    return hero.name;

}

//  -----  Igual a la Función de arriba  -----

const findHeroes = () => new Promise(resolve => {
    const hero = heroes.find(hero => hero.id === id);
    resolve(hero);
})



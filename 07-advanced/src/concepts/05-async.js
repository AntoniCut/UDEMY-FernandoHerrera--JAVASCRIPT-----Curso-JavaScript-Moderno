//  **********************************************
//  **********  /src/concepts/async.js  **********
//  ***********************************************

//import { heroes } from "../data/heroes";
import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncComponent = (element) => {

    console.warn('asyncComponent');

    const id1 = "5d86371fd55e2e2a30fe1ccb";     //  Black Panther
    console.log('Inicio de Componente');
    
    console.log("funcion asyncrona", findHero(id1));
    console.log("funcion con promesa igual a la asyncrona", findHeroPromise(id1));

    findHero(id1)
        // .then( ({name}) => element.innerHTML = name)
        .then( name => element.innerHTML = name)
        //.then(console.log)
        .catch( error => element.innerHTML = error)

    console.log('Fin del Componente');


}



/**
 * -----  asyncrona - Encontrar un Heroe  -----
 * @param {String*} id 
 * @returns {Promise<String></String>} 
 */

//  ----------  Función Asyncrona - Devuelve una promesa  ----------
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
        
    if(!hero) throw `Hero with id ${id} not found`;
    
    //return hero?.name;                                      //  -----  '?'  si hay un error lo deja pasar  -----
    return hero.name;
}


//  ----------  Función identica a la Asyncrona  ----------
const findHeroPromise = (id) => new Promise( resolve => {
    
    const hero = heroes.find(hero => hero.id === id);
    resolve(hero);
})
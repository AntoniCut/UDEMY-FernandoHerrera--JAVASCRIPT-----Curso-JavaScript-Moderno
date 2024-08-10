//  *****************************************************************
//  **********  /src07-advanced//concepts/09-for-await.js  **********
//  *****************************************************************


import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const ForAwaitComponent = async (element) => {

    console.warn('\n-----  09-for-await  -----');

    element.innerHTML = '<h1> 09 - For Await </h1>';

    const id1 = '5d86371f2343e37870b91ef1';         //  Hulk
    const id2 = '5d86371f25a058e5b1c8a65e-';         //  Capitan America


    const heroIds = heroes.map( hero => hero.id);
    //console.log(heroIds);

    const heroPromises = getHeroesAsync(heroIds);

    for await(const hero of heroPromises) {
        element.innerHTML += `${hero.name} <br>`
    }
    

    if( await getHeroAsync(id1)) {
        element.innerHTML += 'Si existe ese Heroe';
        return;
    }

    element.innerHTML += 'No existe ese Heroe';

}



/**
 * --  Regresa un arreglo de promesas  --
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {

    const heroPromises = [];

    heroIds.forEach(id => {
        heroPromises.push(getHeroAsync(id));
    });

    return heroPromises;
}


/**
 * 
 * @param {String} id 
 * @returns {<Promise></Promise>}
 */
const getHeroAsync = async (id) => {

    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find(hero => hero.id === id);
}
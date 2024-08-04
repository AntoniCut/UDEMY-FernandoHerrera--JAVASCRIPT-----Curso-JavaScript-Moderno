//  ***************************************************************
//  **********  /src/concepts/07-async-await.js  ******************
//  ***************************************************************


import { heroes } from "../data/heroes";


/**
 * -----  functión --  DemoComponent -----
 * @param {HTMLDivElement} element 
 */

export const AsyncAwaitComponent = async (element) => {

    console.warn('\n-----  07-async-await  -----');

    element.innerHTML = '<h1> 07 - Async Await </h1>';

    const id1 = '5d86371f2343e37870b91ef1';         //  Hulk
    const id2 = '5d86371f25a058e5b1c8a65e-';         //  Capitan America

    try {

        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        element.innerHTML += `${hero1.name} / ${hero2.name}`;

    } catch (error) {
        element.innerHTML += error;
    }



    // const {name: name1} = await findHero(id1);
    // const {name: name2} = await findHero(id2);
    //element.innerHTML += `${name1} / ${name2}`;

}



const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) throw `Hero with id ${id} not found`;

    return hero;

}







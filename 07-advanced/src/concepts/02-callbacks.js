//  *****************************************************
//  **********  /src/concepts/02-callbacks.js  **********
//  *****************************************************

import { heroes } from '../data/heroes';

/**
 * -----  función  --  callbacksComponent  -----
 * @param {HTMLDivElement} element 
 */

export const callbacksComponent = (element) => {

    console.warn("-----  CallbacksComponent  -----");

    const id1 = "5d86371f1efebc31def272e2";     //  ironMan
    const id2 = "5d86371fd55e2e2a30fe1ccb2";    //  spiderMan
    const id3 = "5d86371f97c29d020f1e1f6d";      //  Falcon

    //  -----  Callbacks Hell  -----
    findHero(id1, (error, hero1) => {

        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {

            if (error) {
                element.innerHTML = error;
                return;
            }

            findHero(id3, (error, hero3) => {

                if (error) {
                    element.innerHTML = error;
                    return;
                }

                //element.innerHTML = hero?.name || 'No hay heroe';     //  validación para saber si hay un heroe o no.
                element.innerHTML = ` ${hero1.name} / ${hero2.name} / ${hero3.name} `;

            });

        });

    });

}


/**
 * -----  función  --  Buscar un Heroe  -----
 * @param {String} id 
 * @param { (error: String|null, hero: Object) => void } callback 
 */

const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);
        
    if (!hero) {
        callback(`Hero with id ${id} not found.`);
        return;
    }

    callback(null, hero);

}
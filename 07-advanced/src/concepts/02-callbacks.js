//  *****************************************************
//  **********  /src/concepts/02-callbacks.js  **********
//  *****************************************************


import { heroes } from '../data/heroes';

/**
 * -----  functión --  CallbacksComponent -----
 * @param {HTMLDivElement} element 
 */

export const CallbacksComponent = (element) => {

    console.warn('\n-----  02-callbacks  -----');

    const id1 = '5d86371fd55e2e2a30fe1ccb1';        //  Doctor Strange
    const id2 = '5d86371fd55e2e2a30fe1ccb2';        //  Spider Man
    
    findHero(id1, (error, hero1) => {

        //element.innerHTML = hero?.name || 'No hay heroe';

        if(error) {
            element.innerHTML = error; 
            return;
        }

        findHero(id2, (error, hero2) => {

            if(error) {
                element.innerHTML = error; 
                return;
            }

            element.innerHTML = `${hero1.name} / ${hero2.name}`;

        });

    });

}



/**
 * --  findHero()  --
 * @param {String} id 
 * @param { ( error: String|null, hero: Object) => void } callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if(!hero) {
        callback(`Hero with id ${id} not found.`);
        return;     //  undefined
    }


    callback(null, hero);


}
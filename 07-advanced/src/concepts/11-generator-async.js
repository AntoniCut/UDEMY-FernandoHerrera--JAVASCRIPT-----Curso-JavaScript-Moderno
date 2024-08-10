//  ************************************************************************
//  **********  /src/07-advanced//concepts/11-generator-async.js  **********
//  ************************************************************************


import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const GeneratorAsyncComponent = async (element) => {

    console.warn('\n-----  11-generator-async  -----');

    element.innerHTML = '<h1> 11 - Generator Async </h1>';
    

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {

        const {value, done} = (await heroGenerator.next());
        isFinished = done;

        if(isFinished) break;

        console.log({value, done});

        element.innerHTML += `${value} &nbsp; &nbsp; - `;

    } while ( !isFinished );

}



async function* getHeroGenerator() {

    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No hay Mas Heroes';
}



const sleep = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve();

        }, 1000);
    });
}







//  *********************************************************************
//  **********  /10-esnext/01-arrays/array-structuredclone.js  **********
//  *********************************************************************


console.log('\n\n');
console.warn('array-structuredclone.js');

const superHeroes = [
    //"Antonio",
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    }

];

console.log("\nsuperHeroes");
console.table(superHeroes);

const superHeroesCopy = [...superHeroes];
console.log("superHeroesCopy");
console.table(superHeroes);


superHeroesCopy[0] = 'Green Lantern'
console.log("\nsuperHeroes y superHeroesCopy posicion 0");
console.table(superHeroes);
console.table(superHeroesCopy);
console.table(superHeroesCopy[0]);

const superHeroesCopy2 = [...superHeroes.map( h => ({...h}))];
console.table(superHeroesCopy2);


console.log("\nCopia con StructuredClone");
const superHeroesCopy3 = structuredClone(superHeroes);
console.table(superHeroesCopy3);






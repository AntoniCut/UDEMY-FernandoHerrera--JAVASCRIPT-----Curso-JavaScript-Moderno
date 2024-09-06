//  ***************************************************************
//  **********  /10-esnext/01-arrays/array-to-method.js  **********
//  ***************************************************************


console.log('\n\n');
console.warn('array-to-method.js');

const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
const heroesCopy = ['Batman', 'Superman', 'Flash', 'Aquaman'];

console.log('heroes')
console.table(heroes)


heroes.sort();
console.log('heroes Ordenados con sort')
console.table(heroes)

console.log('heroesCopy')
console.table(heroesCopy)


//  ----------  Metodos TO  ----------
const toSortedHeroes = heroes.toSorted();
console.log('heroes Ordenados con toSorted')
console.table(toSortedHeroes);


heroes.reverse()
console.log('heroes Ordenados con reverse')
console.table(heroes)


const toReverseHeroes = heroes.toSorted();
console.log('heroes Ordenados con toReverse')
console.table(toReverseHeroes);


const spliceHeroes = heroes.splice();
console.log('heroes con splice')
console.table(spliceHeroes);


const spliceHeroes2 = heroes.splice(0, 2, 'Green Lantern');
console.log('heroes de splice con parametros')
console.table(heroes);


//  -----  toSpliced no muta el arreglo original  -----
const toSplicedHeroes = heroes.toSpliced(0, 2, 'Green Lantern');
console.log('heroes de toSpliced')
console.table(toSplicedHeroes);


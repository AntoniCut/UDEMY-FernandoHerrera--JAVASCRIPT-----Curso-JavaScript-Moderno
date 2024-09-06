//  **********************************************************
//  **********  /10-esnext/01-arrays/array-with.js  **********
//  **********************************************************


console.warn('array-with.js');

const state = [

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

console.log('state');
console.table(state);


//  ----------  Metodo Tradicional  ----------
const index = 1;
const newName = 'Green Lantern';


console.log('newState');
const newState = state.map( (hero, i) => {

    if( i === index) hero.name = newName;
    
    return {...hero};
});

console.table(newState);


//  ----------  Metodo With  ----------

console.log('newState2 - with');
const newState2 = state.with(index, {
    id: 1000,
    name: newName
});
console.table(newState2);


console.log('newState3 - copyWithin');
const newState3 = state.copyWithin(index, {
    id: 1000,
    name: newName
});
console.table(newState3);


console.log('newState4 - with con spred');
const newState4 = state.with(index, {
    ...state[index],
    name: newName
});
console.table(newState4);


console.log('newState5 - with con spred y at');
const newState5 = state.with(index, {
    ...state.at(index),
    name: newName
});
console.table(newState5);


console.log("Ultima posicion de newState5: ", newState5.at(-1))

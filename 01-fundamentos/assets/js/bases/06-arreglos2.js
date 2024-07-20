//  *****************************************************************
//  **********  /01-fundamentos/assets/js/06-arreglos2.js  **********
//  *****************************************************************


let juegos = ['Zelda', 'Mario', 'Metroid', 'Chromo'];
console.log('Largo:', juegos.length);


let primero = juegos[0];
let ultimo = juegos[juegos.length-1];


console.log("*****  Juegos  *****");
console.log(juegos);
console.log("----- Posicion 1 ----------", primero);
console.log("----- Posicion Ultima -----", ultimo);


console.log("*****  Recorrer el Array con 'foreach()'  *****");
juegos.forEach( (elemento, indice, arreglo) => {
    console.log({elemento, indice, arreglo})
});


console.log("Añadimos el juego 'F-Zero' con 'push()' al final y volvemos a visualizar el array");
let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);
juegos.forEach( (juego, indice) => {
    console.log({indice, juego})
});


console.log("Añadimos el juego 'Pokemon' con 'unshift()' al inicio y volvemos a visualizar el array");
juegos.unshift('Pokemon');
console.log(nuevaLongitud, juegos);
juegos.forEach( (juego, indice) => {
    console.log({indice, juego})
});


console.log("Eliminamos el ultimo juego con 'pop()' y volvemos a visualizar el array");
juegos.pop();
console.log(nuevaLongitud, juegos);
juegos.forEach( (juego, indice) => {
    console.log({indice, juego})
});


console.log("Eliminamos 2 Juegos con 'splice()' a partir de la posicion 1 y volvemos a visualizar el array");
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log("Se han eliminado los juegos", juegosBorrados);
juegos.forEach( (juego, indice) => {
    console.log({indice, juego})
});


console.log("-----  Indice que ocupa 'Metroid'  -----");
let metroidIndex = juegos.indexOf('Metroid');       //  Buscar la posicion del elemento 'Metroid'. Regresa -1 si no lo encuentra.
console.log(metroidIndex);








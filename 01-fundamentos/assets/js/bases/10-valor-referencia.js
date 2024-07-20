//  ************************************************************************
//  **********  /01-fundamentos/assets/js/10-valor-referencia.js  **********
//  ************************************************************************


//  **********  Primitivos  -----  Mandamos por Valor  **********
console.log("*****  Primitivos --  Mandamos por Valor  *****");
let a = 10;
let b = a;
a = 30;
console.log({a, b});

//  **********  Objetos  -----  Mandamos por Referencia  **********
console.log("*****  Objetos 1 --  Mandamos por Referencia  *****");
let juan1 = { nombre: 'Juan'};
let ana1 = juan1;
ana1.nombre = 'Ana';
console.log({juan1, ana1});


//  **********  Objetos  -----  Mandamos por Referencia  --  Operador spred  **********
console.log("*****  Objetos 2 --  Mandamos por Referencia  --  Operador 'spred'  *****");
let juan2 = { nombre: 'Juan'};
let ana2 = {...juan2};          //  operador 'spred'.  '...argumento'.
ana2.nombre = 'Ana';
console.log({juan2, ana2});



//  **********  Ejemplo 1  ----- Objetos  *********
console.log("*****  Otro ejemplo con Objetos 1  *****");
const cambiaNombre1 = (persona1) => {
    persona1.nombre = 'Tony';
    return persona1;
}

let peter1 = {nombre: 'Peter'}
let tony1 = cambiaNombre1(peter1);
console.log({ peter1, tony1});        //  Imprime Tony, Tony.


//  **********  Ejemplo 2  -----  Objetos  *********
console.log("*****  Otro ejemplo con Objetos 2  *****");
const cambiaNombre2 = (persona2) => {
    persona2.nombre = 'Tony';
    return persona2;
}

let peter2 = {nombre: 'Peter'}
let tony2 = cambiaNombre2({...peter2});
console.log({ peter2, tony2});        //  Imprime Peter, Tony.



//  **********  Ejemplo 3  -----  Arreglos  *********
console.log("*****  ejemplo con arreglos 1  *****");
const frutas1 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas1 = frutas1;
otrasFrutas1.push('Mango');
console.table({ frutas1, otrasFrutas1 });


//  **********  Ejemplo 4  -----  Arreglos con ...spred  *********
console.log("*****  ejemplo con arreglos 2 -----  ...spred  *****");
const frutas2 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas2 = [...frutas2];              //  ...spred.
otrasFrutas2.push('Mango');
console.table({ frutas2, otrasFrutas2 });


//  **********  Ejemplo 5  -----  Arreglos con ...slice y spread  *********
console.log("*****  ejemplo con arreglos 3 -----  slice()  *****");
const frutas3 = ['Manzana', 'Pera', 'Piña'];


//  Utilizando 'slice()'.
console.time('slice');
const otrasFrutas3 = frutas3.slice();              // slice().
console.timeEnd('slice');

//  Utilizando '...spread'.  Esta Forma es -----  ¡Mas Recomendable!  -----.
console.time('spread');
const otrasFrutas4 = [...frutas3];                 // ...spread.
console.timeEnd('spread');


otrasFrutas3.push('Mango');
console.table({ frutas3, otrasFrutas3 });


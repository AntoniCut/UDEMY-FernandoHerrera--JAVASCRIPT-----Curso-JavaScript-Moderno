//  *****************************************************************
//  **********  /01-fundamentos/assets/js/08-funciones.js  **********
//  *****************************************************************


//  **********  Función Normal o Tradicional  **********
function saludar1(nombre) {
    console.log('Funcion saludar1()');
    console.log(arguments);
    console.log('Hola ' + nombre);
    return [1, 2, 3, 4, 5];

    //  Esto nunca se va ha ejecutar.
    console.log('Soy un codigo que estoy detras del return');
}


//  **********  Función Anonima  **********
const saludar2 = function (nombre) {
    console.log('Funcion saludar2()');
    console.log('Hola ' + nombre);
}

//  **********  Funciones de Flecha Sin Parametros  **********
const saludarFlecha1 = () => {
    console.log('Funcion saludaFlecha1()');
}

//  **********  Funciones de Flecha Con Parametros. Si hay un solo parametro se puede omitir el parentesis  **********
const saludarFlecha2 = nombre => {
    console.log('Funcion saludaFlecha2()');
    console.log('Hola ' + nombre);
}


//  Llamadas a las Funciones.
const retornoSaludar = saludar1('Antonio', 40, true, 'Costa Rica');    //  1.
console.log("saludar1() devuelve: ", retornoSaludar[0], retornoSaludar[1], retornoSaludar[2], retornoSaludar[3], retornoSaludar[4]);
saludar2('Pedro');
saludarFlecha1();
saludarFlecha2('Juan');

//////////////////////////////////////////////////////////////////////

function sumar1(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

const sumar3 = (a, b) => a + b;     //  Identica a sumar2() solo si solo esta el return.

console.log("La funcion Sumar1 devuelve: " + sumar1(3, 4));
console.log("La funcion Sumar2 devuelve: " + sumar2(3, 4));
console.log("La funcion Sumar3 devuelve: " + sumar3(3, 4));


//////////////////////////////////////////////////////////////////////


function getAleatorio1() {
    return Math.random();
}
console.log("Esta función getAleatorio1() devuelve un numero aleatorio: " + getAleatorio1());

const getAleatorio2 = () => Math.random();
console.log("Esta función de Flecha getAleatorio2() devuelve un numero aleatorio: " + getAleatorio2());

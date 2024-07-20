//  *************************************************************************
//  **********  /01-fundamentos/assets/js/13-operador-ternario.js  **********
//  *************************************************************************

//  **********  Operador Ternario  **********

//  **********  Tienda  **********
//  Dias de la semana abrimos a las 11,
//  fin de semana abrimos a las 9.
//  Entra a un sitio web, para consultar si esta abierto hoy...



//  **********  1ª FORMA  **********
console.warn('**********  1ª Forma  **********');
const dia1 = 1;  // 0: Domingo, 1: Lunes...
const horaActual1 = 10;

let horaApertura1;
let mensaje1;       // Esta abierto, Esta cerrado, hoy abrimos a las XX.

if(dia1 === 0 || dia1 === 6) {
    console.log('Fin de semana');
    horaApertura1 = 9;
} else {
    console.log('Dia de semana');
    horaApertura1 = 11;
}

if( horaActual1 >= horaApertura1) {
    mensaje1 = 'Esta Abierto';
} else {
    mensaje1 = `Esta Cerrado, hoy abrimos a las ${horaApertura1} `; 
}

console.log({ horaApertura1, mensaje1 });


//  **********  2ª FORMA  **********
console.warn('**********  2ª Forma  **********');
const dia2 = 8;  // 0: Domingo, 1: Lunes...
const horaActual2 = 10;

let horaApertura2;
let mensaje2;       // Esta abierto, Esta cerrado, hoy abrimos a las XX.

horaApertura2 = ( [0, 6].includes( dia2 ) ) ? 9 : 11;

mensaje2 = (horaActual2 >= horaApertura2)   ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura2}`
console.log({ horaApertura2, mensaje2 });


//  *****************************************************************
//  **********  /01-fundamentos/assets/js/05-arreglos1.js  **********
//  *****************************************************************


const arr1 = new Array(10);
console.log("arreglo arr1:", arr1);

const arr2 = [];
console.log("arreglo arr2:" , arr2);


let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos);
console.log("Posicion 0: " + videoJuegos[0]);
console.log("Posicion 1: " + videoJuegos[1]);
console.log("Posicion 2: " + videoJuegos[2]);

let arregloCosas = [
    true,
    123,
    'Antonio',
    1 + 2,
    function() {},
    () => {},
    { a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman'] ]
];
console.log("  *****  arregloCosas ***** ");
console.log(arregloCosas);
console.log(" ***** Quiero Imprimir 'Dr. Light' *****", arregloCosas[7][3]);
console.log(" ***** Quiero Imprimir 'Woodman' *****", arregloCosas[7][4][1]);

















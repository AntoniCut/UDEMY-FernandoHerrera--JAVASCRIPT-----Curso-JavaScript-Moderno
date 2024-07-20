//  ***************************************************************
//  **********  /01-fundamentos/assets/js/primitivos.js  **********
//  ***************************************************************

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = 'Tia May';
nombre = `Tia May`;
console.log('Tipo de dato de nombre: ' + typeof nombre);

nombre = 123;
console.log('Tipo de dato de nombre: ' + typeof nombre);

let esMarvel = true;
console.log('Tipo de dato de esMarvel: ' + typeof esMarvel);

let edad = 33.001;
console.log('Tipo de dato de edad: ' + typeof edad);

let superPoder;
console.log('Tipo de dato de superPoder: ' + typeof superPoder);

let soyNull = null;
console.log('Tipo de dato de soyNull: ' + typeof soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log('Symbol 1:' + typeof symbol1 + ' ----- Symbol 2:' + typeof symbol2);
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 === symbol2);
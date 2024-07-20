//  ***********************************************************************
//  **********  /01-fundamentos/assets/js/14-protip-ternario.js  **********
//  ***********************************************************************

//  **********  Pro Tip Operador Ternario  **********

//  *****  1ª Forma  **********
const elMayor1 = (a, b) => {
    return ( a > b) ? a : b;
}
console.log( elMayor1(20, 30) );    

//  *****  2ª Forma  **********
const elMayor2 = (a, b) => ( a > b ) ? a : b
console.log( elMayor2(20, 30) );

//  *****  2ª Forma  **********
const elMayor3 = (a, b) => a > b ? a : b
console.log( elMayor3(20, 30) );

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dólares' : '10 Dólares';
console.log( tieneMembresia( true ) );


////////////////////////////////////////////////////////////////////////////////////
const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(),       //  Funcion Anonima Autoinvocada.
    elMayor2(10, 15)
];
console.log( amigosArr );


////////////////////////////////////////////////////////////////////////////////////
const nota = 85;
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';


console.log({ nota, grado });
              
              
              

//  ***************************************************************
//  **********  /01-fundamentos/assets/js/11-if-else.js  **********
//  ***************************************************************


//  **********  IF - ELSE  **********

let a = 8;

if (a >= 10) {       //  undefined, null, una asignación.
    console.log(' "a" es mayor o igual a 10');
} else {
    console.log(' "a" es menor a 10');
}

const hoy = new Date();
console.log(hoy);

let dia = hoy.getDay();     //  0: Domingo, 1: Lunes, 2: Martes.....
console.log(dia);

if (dia === 0) console.log('Hoy es Domingo');
else if (dia === 1) console.log('Hoy es Lunes')
else if (dia === 2) console.log('Hoy es martes')
else if (dia === 3) console.log('Hoy es Miercoles')
else if (dia === 4) console.log('Hoy es Jueves')
else if (dia === 5) console.log('Hoy es Viernes')
else if (dia === 6) console.log('Hoy es Sabado')



//  ********** Forma 1  -----  Sin usar If-Else, o Switch, unicamente Objetos  **********
console.log("**********  Forma 1  -----  Utilizando Objetos  **********");
//  dias de la Semana.
dia = 3;

const diasLetras1 = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves', 
    5: 'viernes', 
    6: 'sabado'
};

console.log( diasLetras1[dia] || 'Dia no definido');


//  ********** Forma 2  -----  Sin usar If-Else, o Switch, unicamente Objetos  **********
console.log("**********  Forma 2  -----  Utilizando Objetos  **********");
//  dias de la Semana.
dia = 3;

const diasLetras2 = {
    0: () => 'domingo - 0',
    1: () => 'lunes - 1',
    2: () => 'martes - 2',
    3: () => 'miercoles - 3',
    4: () => 'jueves - 4', 
    5: () => 'viernes - 5', 
    6: () => 'sabado - 6'
};

console.log( diasLetras2[dia]() || 'Dia no definido');


//  ********** Forma 3  -----  Sin usar If-Else, o Switch, unicamente Arreglos  **********
console.log("**********  Forma 3  -----  Utilizando Arreglos  **********");
//  dias de la Semana.
dia = 3;

const diasLetras3 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves', 
    'viernes', 
    'sabado'
];

console.log( diasLetras3[dia] || 'Dia no definido');



////////////////////////////////////////////////////////
console.log("**********  Fin de programa  **********");
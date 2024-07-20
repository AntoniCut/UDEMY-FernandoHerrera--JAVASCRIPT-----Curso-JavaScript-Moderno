//  *******************************************************************************
//  **********  /01-fundamentos/assets/js/09-protip-retornofunciones.js  **********
//  *******************************************************************************


//  **********  Tip 1  **********
function crearPersona1(nombre, apellido) {
    return {
        nombre,       //  = nombre:  nombre
        apellido,     //  = apellido: apellido 
    }
}

const persona1 = crearPersona1('Antonio', 'Cutillas');
console.log(persona1);


//  **********  Tip 2  **********
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});   //  Creamos la Función.
console.log(crearPersona2('Antonio', 'Cutillas'));                  //  Llamamos a la Función.



//  **********  Tip 3  **********
function imprimeArgumentos1() {
    console.log(arguments);
}

console.log("Funcion imprimeArgumentos1() "); 
imprimeArgumentos1(10, true, false, 'Antonio', 'Hola');


//  **********  Tip 4  **********
const imprimeArgumentos2 = (...arg) => {        //  'rest'  despues del parametro rest no puede venir ningun argumento.
    console.log(arg);
}

console.log("Funcion imprimeArgumentos2() "); 
imprimeArgumentos2(10, true, false, 'Antonio', 'Hola');


//  **********  Tip 5  **********
const imprimeArgumentos3 = (edad, ...args) => {        //  'rest'  despues del parametro rest no puede venir ningun argumento pero antes si.
    console.log({edad, args});
}

console.log("Funcion imprimeArgumentos3() "); 
imprimeArgumentos3(10, true, false, 'Antonio', 'Hola');


//  **********  Tip 6  **********
const imprimeArgumentos4 = (edad, ...args) => {        //  'rest'  despues del parametro rest no puede venir ningun argumento pero antes si.
    //console.log({edad, args});
    return args;
}

console.log("Funcion imprimeArgumentos4() "); 
const argumentos4 = imprimeArgumentos4(10, true, false, 'Antonio', 'Hola');
console.log(argumentos4);
console.log(argumentos4[0], argumentos4[1], argumentos4[2]);


//  **********  Tip 7  **********
const imprimeArgumentos5 = (edad, ...args) => {        //  'rest'  despues del parametro rest no puede venir ningun argumento pero antes si.
    return args;
}

console.log("Funcion imprimeArgumentos5() "); 
const [casado, vivo, nombre, saludo] = imprimeArgumentos5(10, true, false, 'Antonio', 'Hola');      //  Creacion de la Función.
console.log({casado, vivo, nombre, saludo});

//  Volvemos a la funcion crearPersona2().
//  const persona1 = crearPersona1('Antonio', 'Cutillas');
console.log("CrearPersona1() para solo regresar el apellido");
const {apellido: nuevoApellido} = crearPersona1('Antonio', 'Cutillas');
console.log(nuevoApellido);


//  **********  Tip 7 - Desectructuración de Argumentos  **********
const tony = {
    nombre:   'Tony Stark',
    codeName: 'Ironman',
    vivo:     false,
    //edad:     40,
    trajes:   ['Mark I', 'Mark V', 'Hulkbuster'],
};

//  Creacion de la Función.
const imprimePropiedades1 = (personaje) => {
    console.log('nombre', personaje.nombre);
    console.log('codeName', personaje.codeName);
    console.log('Vivo', personaje.vivo);
    console.log('Edad', personaje.edad);
    console.log('Trajes', personaje.trajes);
}

console.log("imprimePropiedades1()");
imprimePropiedades1(tony);


const imprimePropiedades2 = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

console.log("imprimePropiedades2()");
imprimePropiedades2(tony);

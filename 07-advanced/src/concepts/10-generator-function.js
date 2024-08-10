//  ***************************************************************************
//  **********  /src/07-advanced//concepts/10-generator-function.js  **********
//  ***************************************************************************


import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const GeneratorFunctionComponent = (element) => {

    console.warn('\n-----  10-generator-function  -----');

    element.innerHTML = '<h1> 10 - Generator Function </h1>';

    const myGenerator = myFirstGeneratorFunction();

    console.log(myGenerator.next());       //  Obtenemos el primer yield
    console.log(myGenerator.next());       //  Obtenemos el segundo yield
    console.log(myGenerator.next());       //  Obtenemos el tercer yield
    console.log(myGenerator.next());       //  Obtenemos el cuarto yield
    console.log(myGenerator.next());       //  Obtenemos el quinto yield
    console.log(myGenerator.next());       //  Obtenemos el sexto yield devuelve undefined porque no hay mas valores.


    const genId = idGenerator();

    console.log(genId.next());
    console.log(genId.next());
    console.log(genId.next());
    console.log(genId.next());
    console.log(genId.next());

    //  **********  Ejercicio  **********
    const button = document.createElement('button');
    button.innerText = 'Click me!!!';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);  //  empieza en 6 el contador xQue ya lo hemos llamado antes 5 veces.

}


//  *****  Las Funciones Generadoras no se definen como () =>  *****
function* myFirstGeneratorFunction() {

    yield 'Mi primer Valor';
    yield 'Mi Segundo Valor';
    yield 'Mi Tercer Valor';
    yield 'Mi Cuarto Valor';

    return 'Ya No hay valores';
    yield 'Ya no pueden hacer nada';
}


function* idGenerator() {

    let currentId = 0;
    while (true) {
        yield ++currentId;
    }

}






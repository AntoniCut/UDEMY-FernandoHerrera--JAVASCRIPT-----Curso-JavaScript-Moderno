//  ***********************************************************************
//  **********  /01-fundamentos/assets/js/12-logica-booleana.js  **********
//  ***********************************************************************


//  **********  Lógica Booleana  **********

const regresaTrue = () => {
    
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {

    console.log('Regresa False');
    return false;
}


console.warn('Not o la Negación');
console.log( true );       //  true.
console.log( !true );      //  false.
console.log( false );      //  false.
console.log( !false );     //  true.
console.log( !!false );    //  false.

console.log( !regresaFalse());      //  true



//  **********  Operador 'AND'  -----  '&&'  **********
console.warn('And, &&');            //  'true', si todos los valores són verdaderos.
console.log( 'true && true = ',   true && true);    //  'true'.
console.log( 'true && false = ',  true && false);    //  'false'.
console.log( 'true && !false = ', true && !false);    //  'true'.

console.log("************************************")
console.log("**********  regresaFalse()  **********", regresaFalse());    //  false.
console.log("**********  regresaFalse() && regresaTrue()  **********", regresaFalse() && regresaTrue());        //  false.
console.log("**********  regresaTrue() && regresaFalse()  **********", regresaTrue() && regresaFalse());        //  false.


console.log("************************************");
regresaTrue() && regresaFalse();


console.log("************************************");
regresaFalse() && regresaTrue();


//  **********  Operador 'OR'  -----  '||'  **********
console.warn('OR, ||');            //  'true', si todos los valores són verdaderos.
console.log( 'true || true = ',   true || true);     //  'true'.
console.log( 'true || false = ',  true || false);    //  'true'.
console.log( 'true || !false = ', true || !false);   //  'true'.
console.log( 'false || false = ', false || false);   //  'false'.


console.log("************************************");
console.log("**********  regresaFalse() || regresaTrue()  **********", regresaFalse() || regresaTrue());        //  true.
console.log("**********  regresaTrue() || regresaFalse()  **********", regresaTrue() || regresaFalse());        //  true.
console.log("**********  regresaFalse() || regresaFalse()  **********", regresaFalse() || regresaFalse());      //  false.


console.log("************************************");
console.log( 'true && true && true && false = ', true && true && true && false);         //  'false'.
console.log( 'true || true || true || false = ', true || true || true || false);         //  'true'.
console.log( 'false || false || false || false = ', false || false || false || false);   //  'false'.


//  **********  Asignaciones  **********
console.warn('Asignaciones, =');            //  'true', si todos los valores són verdaderos.
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
console.log("a1 = ", a1);                   //  evalua el ultimo valor.

const a2 = false && 'Hola Mundo' && 150;
console.log("a2 = ", a2);                   //  evalua false.

const a3 = 'Hola' && 'Mundo';
console.log("a3 = ", a3);   

const a4 = 'Hola' && 'Mundo' && soyFalso;
console.log("a4 = ", a4);   

const a5 = soyFalso || 'Ya no soy falso';
console.log("a5 = ", a5);   

const a6 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
console.log("a6 = ", a6);   

const a7 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
console.log("a7 = ", a7);   

const a8 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log("a8 = ", a8);   


if( true || true || true || false ) {
    console.log("Hacer Algo");
} else {
    console.log("Hacer Otra Cosa");
}

if( (regresaFalse() && regresaTrue()) && (true || false || true) ) {
    console.log("Hacer Algo");
} else {
    console.log("Hacer Otra Cosa");
}


///////////////////////////////////////////////////////////////////////////////////
console.warn('Fin del Programa');
//  *****************************************************************************
//  **********  /01-fundamentos/assets/js/ciclos/16-while-do-while.js  **********
//  *****************************************************************************


//  **********  While  **********
console.warn("While");
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

while( i < carros.length ) {
    console.log( carros[i] );
    i++;
}


//  undefined.
//  null.
//  false.
console.log("********************");
i = 0;
while( carros[i] ) {
    if( i === 1 ) {
        break;
    }
    console.log( carros[i] );
    i++;
}


console.log("********************");
i = 0;
while( carros[i] ) {
    if( i === 1 ) {
        i++;
        continue;
    }
    console.log( carros[i] );
    i++;
}



//  **********  Do-While  **********
console.warn("Do-While");
let j = 0;
do {

    console.log( carros[j] );
    j++
}while( carros[j] )
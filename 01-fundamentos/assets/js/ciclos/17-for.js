//  ******************************************************************
//  **********  /01-fundamentos/assets/js/ciclos/17-for.js  **********
//  ******************************************************************


const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];


//  **********  For  **********
console.warn("For Tradicional");
for( let i = 0; i < heroes.length; i++) {
    console.log( heroes[i] );
}

//  **********  For-In  **********
console.warn("For-In");
for( let i in heroes ) {
    console.log( heroes[i] );
}

//  **********  For-Of  **********
console.warn("For-Of");
for( let heroe of heroes) {
    console.log( heroe );
}

//  **********  For-Each  **********
console.warn("For-Each");
heroes.forEach((heroe) => {
    console.log(heroe);
});
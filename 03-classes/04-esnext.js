//  *************************************
//  **********  /04-esnext.js  **********
//  *************************************


//  **********  Creacioón de la CLASE RECTANGULO  **********
//  -----  Propiedades Privadas  -----

class Rectangulo {

    #area = 0;

    constructor( base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log( this.#area * 2 );
    }

}


const rectangulo = new Rectangulo( 10, 15 );
console.log( rectangulo );

console.log("\nLlamamos al método 'calculaArea()'");
rectangulo.calcularArea();

//rectangulo.#area = 100;     //  Da error al ser una propiedad privada.
console.log( "\n", rectangulo );
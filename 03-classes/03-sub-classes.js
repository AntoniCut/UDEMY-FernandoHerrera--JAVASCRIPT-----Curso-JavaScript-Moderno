//  ****************************************
//  **********  /03-sub-class.js  **********
//  ****************************************


//  **********  Creacioón de la CLASE PERSONA  **********
class Persona {


    //  *****  Propiedad Estatica - Por Convención justo despues de la clase  *****
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    
    //  *****  Metodos Estaticos - Por Convención justo despues de la clase  *****
    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos , soy un método statico');
    }


    //  *****  Propiedades *****
    //  Es Opcional si se declaran en el constructor.
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';


    //  *****  Constructor  *****
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        if (!nombre) throw Error('Necesitamos el Nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }


    //  *****  Metodo 'set'  del Atributo 'comida'  *****
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    //  *****  Metodo 'get'  del Atributo 'comida'  *****
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }


    //  *****  Funciones Definidas por el Usuario  *****

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {

        this.quienSoy();    //  Llama a la función de la clase.
        quienSoy();         //  Llama a la funcion interna.

        console.log(`${this.codigo} dice ${this.frase}`);

        function quienSoy() {
            console.log('Hola Mundo');
        }
    }

}   //  **********  FIN de la CLASE  **********


//  **********  Herencia de Clases  **********
console.warn("**********  Extends y SubClases  **********");


//  *****  La clase 'Heroe' hereda o extiende de  la clase 'Persona'  *****
class Heroe extends Persona{
    
    clan = 'sin clan';

    constructor( nombre, codigo, frase) {
        
        super( nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy() {
        console.log("\nMetodo 'quienSoy() de la clase 'Heroe'");
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        
        console.log("\nMetodo 'quienSoy() de la clase 'Persona'");
        super.quienSoy();
    }

}


const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy el Hombre Araña');
console.log( spiderman);

console.log("\nInvocamos a 'spiderman.quienSoy()'...");
spiderman.quienSoy();




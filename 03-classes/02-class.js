//  ************************************
//  **********  /01-class.js  **********
//  ************************************


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
        console.warn('Hola');
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


//  **********  Creamos Instancias de Clase  **********
const anonimo = new Persona();
console.log("Creacion de 'anonimo' sin argumentos: ", anonimo);
console.log("\n", "\n", "\n");

const spiderman = new Persona('Antonio', 'Spiderman', 'El hombre araña');
const ironman = new Persona('Tony Stark', 'Ironman', 'El hombre Ironman');

//  **********  Llamadas a Metodos de Clase  **********
spiderman.quienSoy();
spiderman.miFrase();
console.log("Creacion de 'spiderman' con argumentos: ", spiderman);

ironman.quienSoy();
ironman.miFrase();

console.log("\n", "\n", "\n");
console.log("Creacion de 'ironman' con argumentos: ", ironman);


//  **********  Operaciones con 'set' y 'get'  **********
console.log("\n", "\n", "\n");
console.warn("**********  Metodo Set y Get  **********");

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

//  se crea la propiedad dinamicamente. Porque la propiedad es pública.
spiderman.nemesis = 'Duende Verde';

console.log(spiderman);


//  **********  Propiedades Estaticas  **********
console.log("\n", "\n", "\n");
console.warn("**********  Propiedades y Metodos Estaticos  **********");
//Persona._conteo = 2;
console.log('Conteo Stático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);

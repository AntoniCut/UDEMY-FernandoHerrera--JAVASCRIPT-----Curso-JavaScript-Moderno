//  ***************************************
//  **********  /01-problema.js  **********
//  ***************************************

//  **********  Utilizando Objetos  **********
const fher = {
    nombre: 'Antonio',
    edad:   30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad } `);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad:   15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad } `);
    }
}

fher.imprimir();
pedro.imprimir();

const melissa = {
    nombre: 'Melissa',
    edad:   15
}


//  **********  Utilizando Clases  **********

//  Ok. Esto se puede crear con la palabra reservada 'new'.
//  Actualmente esta sentencia no es recomendable a no ser que se utilizen navegadores antiguos.

function Persona( nombre, edad ) {

    console.log("Se ejecuto esta linea");
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad } `);
    }
         
}

//  Crea una instancia de una clase.
const maria = new Persona('Maria', 18);     
//console.log( maria );
maria.imprimir();

//  Crea una instancia de una clase.
const melisa = new Persona('Melissa', 15);
melisa.imprimir();





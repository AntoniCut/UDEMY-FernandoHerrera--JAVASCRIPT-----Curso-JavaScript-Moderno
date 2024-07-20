//  **********************************************************************
//  **********  /01-fundamentos/assets/js/07-objeto-literal.js  **********
//  **********************************************************************


const personaje = {
    nombre:   'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip:       '10800 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coordenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);
console.log('Longitud', personaje.coords.lng);
console.log('Nº de Trajes de IronMan', personaje.trajes.length);
console.log('Ultimo Traje de IronMan', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);      //  Buscar un elemento de un objeto.

console.log('Ultima Pelicula:', personaje["ultima-pelicula"]);

//  Mas Detalles.

//  Borrar elementos.
delete personaje.edad;
console.log(personaje);

personaje.casado = true;                            //  Añadir elementos dinamicamente.
const entriesPares = Object.entries(personaje);     //  Convertir el Objeto en Array.
console.log(entriesPares);

Object.freeze(personaje);                           //  Bloquea Añadir Propiedades. Pero No a los Objetos.
personaje.dinero = 100000000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);  //  Lista las Propiedades del Objeto.
console.log("Propiedades del Objeto", {propiedades});       

const valores = Object.values(personaje);
console.log("Valores del Objeto", {valores});       


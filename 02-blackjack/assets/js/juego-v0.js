//  *******************************************
//  **********  /assets/js/juego.js  **********
//  *******************************************

//  2C = Two of Clubs
//  2D = Two of Diaminds
//  2H = Two of Heart
//  2S = Two of Spades

//  **********  Declaración de Variables  **********
let deck = [];                                  //  cartas.
const tipos = ['C', 'D', 'H', 'S'];             //  tipos de cartas.
const especiales = ['A', 'J', 'Q', 'K'];        //  cartas especiales.

let puntosJugador = 0,
    puntosComputadora = 0;


//  **********  Referencias al HTML **********

const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');


const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


//  Función para crear una Nueva Baraja de Cartas.
const crearDeck = () => {

    //  creacion de cartas.
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    //  creación de las cartas especiales.
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo)
        }
    }

    console.warn("Creacion del Deck");
    console.log(deck);

    deck = _.shuffle(deck);    //  Ordena el Array aleatoriamente.
    console.warn("deck Desordenado Aleatoriamente ");
    console.log( deck );
    
    return deck;

}


//  **********  Funcion que me permite 'Pedir una Carta'  **********
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    //console.log(carta);     //  Carta debe de ser de la baraja.
    return carta;
}


//  **********  Funcion que devuelve el 'Valor de la Carta'  **********
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}


//  **********  Funcion 'Turno de la Computadora'  **********
const turnoComputadora = (puntosMinimos) => {

    do {

        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        //  Creamos dinamicamente la imagen de la carta.
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) break;

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    console.log(puntosComputadora);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) alert('Nadie Gana :(');
        else if (puntosMinimos > 21) alert('Computadora Gana!!!');
        else if (puntosComputadora > 21) alert('Jugador Gana!!!');
        else alert('Computadora Gana!!!');
    }, 10);

}

//const valor = valorCarta( pedirCarta() );
//console.log({ valor });


//  **********  Creacion de la Baraja de Cartas Internamente  **********
crearDeck();


//  **********  Eventos  **********

//  *****  Al pulsar botón 'pedir Carta'  *****

btnPedir.addEventListener('click', () => {

    //const valor = valorCarta( pedirCarta() )
    //console.log({ valor });
    const carta = pedirCarta();
    //console.log(carta);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    //  Creamos dinamicamente la imagen de la carta.
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    //  Si los puntos > 21 el 'Jugador Pierde'.
    if (puntosJugador > 21) {

        console.warn(`Perdidte. Te has pasado de 21 puntos!!! , has conseguido ${puntosJugador}`);
        alert(`Perdidte. Te has pasado de 21 puntos!!! , has conseguido ${puntosJugador}`);
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        //  Turno de la Computadora.
        turnoComputadora(puntosJugador);


    } else if (puntosJugador === 21) {

        console.warn('21, Genial, Has Ganado!!!');
        alert('21, Genial, Has Ganado!!!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        //  Turno de la Computadora.
        turnoComputadora(puntosJugador);
    }

    //console.log( puntosJugador );

});


//  *****  Al pulsar botón 'Detener'  *****

btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

});


//  *****  Al pulsar botón 'Nuevo Juego'

btnNuevo.addEventListener('click', () => {

    //  Reseteamos el Juego.
    console.clear();
    
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});





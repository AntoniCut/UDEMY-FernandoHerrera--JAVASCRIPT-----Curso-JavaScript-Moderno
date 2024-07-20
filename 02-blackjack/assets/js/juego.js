//  *******************************************
//  **********  /assets/js/juego.js  **********
//  *******************************************


//  **********  PATRON 'MÓDULO'  **********
//  -----  Es una Función Autoinvocada  -----

const miModulo = (() => {

    'use strict';


    //  **********  Declaración de Variables  **********
    let deck = [];                                  //  cartas.
    const tipos = ['C', 'D', 'H', 'S'],             //  tipos de cartas.
          especiales = ['A', 'J', 'Q', 'K'];        //  cartas especiales.

    let puntosJugadores = [];


    //  **********  Referencias al HTML **********

    const btnNuevo  = document.querySelector('#btnNuevo'),
          btnPedir  = document.querySelector('#btnPedir'),
         btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML         = document.querySelectorAll('small');


    //  **********  Funcion para INICIALIZAR el JUEGO  **********
    const inicializarJuego = (numJugadores = 2) => {

        //  Creacion de la Baraja de Cartas Internamente.
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );
                     
        btnPedir.disabled = false;
        btnDetener.disabled = false;

        //console.log({ puntosJugadores });

    }  //  **********************************************************


    //  **********  Función para CREAR 'DECK' o una Nueva Baraja de Cartas  **********
    const crearDeck = () => {

        //  Reinicializamos el 'deck'.
        const deck = [];

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

        return _.shuffle(deck);    //  Ordena el Array aleatoriamente.

    }   //  *****************************************************************************



    //  **********  Funcion que me permite 'PEDIR una CARTA'  **********
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();

    }  //  **************************************************************



    //  **********  Funcion que devuelve el 'Valor de la Carta'  **********
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;

    }  //  *****************************************************************


    //  **********  Funcion para ACUMULAR los PUNTOS tanto del JUGADOR como de la COMPUTADORA  **********
    //  turno: 0 = 1º Jugador y el Ultimo será la computadora
    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];

    }  //  **********************************************************************************************


    //  **********  Función para CREAR la CARTA  **********
    const crearCarta = (carta, turno) => {

        //  Creamos dinamicamente la imagen de la carta.
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }  //  ************************************************


    //  **********  Función que DETERMINA el GANADOR  **********
    const determinarGanador = () => {

        //  Desestructuración de Arreglos.
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) alert('Nadie Gana :(');
            else if (puntosMinimos > 21) alert('Computadora Gana!!!');
            else if (puntosComputadora > 21) alert('Jugador Gana!!!');
            else alert('Computadora Gana!!!');
        }, 10);

    }


    //  **********  Funcion 'Turno de la Computadora'  **********
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {

            //  petición de carta.
            const carta = pedirCarta();

            //  puntos de la computadora.
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);

            //  crear una carta dinamicamente para la computadora.
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        //  Llamamos a la función para determinar el ganador.
        determinarGanador();

    }  //  ****************************************************************************




    //  **********  EVENTOS  **********

    //  *****  Al pulsar botón 'pedir Carta' en el lado del jugador  *****

    btnPedir.addEventListener('click', () => {

        //  petición de carta.
        const carta = pedirCarta();

        //  puntos de los jugadores salvo la computadora.
        const puntosJugador = acumularPuntos(carta, 0);

        //  creamos la carta dinamicamente para el jugador 0.
        crearCarta(carta, 0);


        //  Si los puntos > 21 el 'Jugador Pierde'.
        if (puntosJugador > 21) {

            alert(`Perdidte. Te has pasado de 21 puntos!!! , has conseguido ${puntosJugador}`);
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            //  Turno de la Computadora.
            turnoComputadora(puntosJugador);

        } else if (puntosJugador === 21) {

            alert('21, Genial, Has Ganado!!!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            //  Turno de la Computadora.
            turnoComputadora(puntosJugador);
        }

    });


    //  *****  Al pulsar botón 'Detener'  *****
    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        //  puntos de los jugadores salvo la computadora.
        //const puntosJugador = acumularPuntos(carta, 0);

        turnoComputadora( puntosJugadores[0] );

    });  //  ********************************************


    //  *****  Al pulsar botón 'Nuevo Juego'  **********
    //  Manejamos el Evento desde el 'index.html'.
    /*
    btnNuevo.addEventListener('click', () => {
                
        //  Inicializamos el juego.
        inicializarJuego();

    });  //  *******************************************
    */

    return {

        //  Hacemos Público el Metodo.
        nuevoJuego: inicializarJuego

    };



})();  //  **********  FIN PATRON MÓDULO  **********  

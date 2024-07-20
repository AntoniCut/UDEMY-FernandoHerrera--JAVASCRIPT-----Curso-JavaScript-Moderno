//  ********************************************************************
//  **********  /src/blackjack/usecases/turno-computadora.js  **********
//  ********************************************************************


import { crearCartaHTML, pedirCarta, valorCarta, resultadoGanador } from "./";



/**
 * **********  funció para el turno de la computadora  **********
 * @param {Number}        puntosMinimos  puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement}   puntosHTML  elemento  HTML para mostrar los puntos de la computadora.
 * @param {HTMLElement}   divCartasComputadora  elemento  HTML para mostrar las cartas.
 * @param {Array<String>} deck 
 */


export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('puntosMinimos son necesario');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {

            const mensaje = 'Nadie Gana!!!';
            resultadoGanador(mensaje);
            //alert('Nadie gana :(');

        } else if (puntosMinimos > 21) {

            const mensaje = 'Computadora Gana!!!';
            resultadoGanador(mensaje);
            //alert('Computadora gana');

        } else if (puntosComputadora > 21) {

            const mensaje = 'Jugador Gana!!!';
            resultadoGanador(mensaje);
            //alert('Jugador Gana');

        } else {

            const mensaje = 'Computadora Gana!!!';
            resultadoGanador(mensaje);
            //alert('Computadora Gana');
        }
    }, 100);
}


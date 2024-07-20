//  **************************************************************
//  **********  /src/blackjack/usecases/crear-carta.js  **********
//  **************************************************************


//import { pedirCarta, valorCarta } from "./";
/**
 * **********  funcioón de creacion de cartas en el HTML  **********
 * @param  {String} carta     argumento carta.
 * @return {HTMLImageElement} imagen de retorno.
 */


export const crearCartaHTML = ( carta, divCartas) => {

    if(!carta) throw new Error('La carta es un argumento obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    
    return imgCarta;
    
}
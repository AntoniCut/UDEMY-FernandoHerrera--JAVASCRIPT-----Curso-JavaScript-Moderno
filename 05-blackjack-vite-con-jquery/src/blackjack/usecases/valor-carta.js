//  **************************************************************
//  **********  /src/blackjack/usecases/pedir-carta.js  **********
//  **************************************************************


/**
 * **********  Funcion que retorna el valor de la carta, que es un numero  **********
 * @param {String} carta  
 * @returns {Number}  que es el valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}
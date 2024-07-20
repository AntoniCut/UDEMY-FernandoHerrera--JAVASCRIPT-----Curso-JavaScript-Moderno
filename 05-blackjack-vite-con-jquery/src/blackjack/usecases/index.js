//  ********************************************************
//  **********  /src/blackjack/usecases/index.js  **********
//  ********************************************************



import _ from 'underscore'
export { crearDeck } from './crear-deck'      //  Exportación Individual.
//import crearDeck from './usecases/crear-deck';      //  Exportación por Defecto.
//import { crearDeck as crearNuevoDeck } from './usecases/crear-deck'  //  Dar un nuevo Nombre.
export { crearCartaHTML} from './crear-carta-html'
export { pedirCarta } from './pedir-carta'
export { valorCarta } from './valor-carta'
export { turnoComputadora} from './turno-computadora'
export { resultadoGanador } from './resultado-ganador'
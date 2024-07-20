//  ***************************************************************
//  **********  /src/todos/uses-cases/render-pending.js  **********
//  ***************************************************************

import todoStore, { Filters } from "../../store/todo.store";



let element;
/**
 * -----  renderPending(elementId)  -----
 * @param {String*} elementId 
 */


//  -----  Función que renderiza el numero de tareas pendientes  -----
export const renderPending = ( elementId) => {

    if(!element) 
        element = document.querySelector( elementId);
    
    if(!element) 
        throw new Error(`Element ${ elementId } not found`);

    //  -----  obtenemos el Nº de tareas pendientes  -----
    element.innerHTML = todoStore.getTodos( Filters.Pending).length;




}
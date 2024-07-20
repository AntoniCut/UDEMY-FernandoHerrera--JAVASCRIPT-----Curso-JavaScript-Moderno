//  *************************************************************
//  **********  /src/todos/uses-cases/render-todos.js  **********
//  *************************************************************


import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";


let element;

/**
 * ----------  Función que Renderiza los 'Todos'  ----------
 * @param {String} elementId 
 * @param {Todo} todos 
 */

export const renderTodos = (elementId, todos = []) => {

    if (!element) {
        //-----  Creamos un elemento HTML  -----
        element = document.querySelector(elementId);
        //console.log("elementId: ", elementId, "\nTodos: ", todos);
    }

    if (!element) 
        throw new Error('Element ${elementId} not found')

    
    element.innerHTML = '';

    

    //  TODO: referencia     




    todos.forEach(todo => {

        element.append(createTodoHTML(todo));

    });



}
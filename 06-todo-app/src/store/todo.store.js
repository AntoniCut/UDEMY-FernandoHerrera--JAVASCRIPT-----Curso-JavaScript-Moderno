//  ************************************************
//  **********  /src/store/todo.store.js  **********
//  ************************************************


//  ----------  Importamos la Clase 'Todo'  ----------
import { Todo } from "../todos/models/todo.model";


//  ----------  Creación de un Objeto de tipo Enumeración  ----------
export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}



//  ----------  Como va ha lucir el estado global de la aplicación  ----------
const state = {

    todos: [
        new Todo('Piedra del Alma'),
        new Todo('Piedra del Infinito'),
        new Todo('Piedra del Tiempo'),
        new Todo('Piedra del Poder'),
        new Todo('Piedra del Campo'),
        new Todo('Piedra de Marfil')
    ],

    filter: Filters.All,

}



//  ----------  Función que inicializa el Store  ----------
const initStore = () => {

    //console.log(state);
    console.log('Init Store');
    loadStore();

}



//  ----------  Función que Carga el Store ----------
const loadStore = () => {

    //throw Error('Not Implemented');
    //console.log( localStorage.getItem('state') );
    
    //  -----  Si No Hay Nada en el localStorage  -----
    if( !localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;

}


//  ----------  Función que Carga el 'Local Storage' ----------
const saveStateToLocalStorage = () => {

    //console.log( "state serializado: ", JSON.stringify(state));        //  JSON.stringify(param)  -  Serializa como un String lo que le pasemos.
    localStorage.setItem('state', JSON.stringify(state));                //  JSON.stringify(param)  -  Serializa como un String lo que le pasemos.
}



/**
 * ----------  Función que obtiene todos los filtros  ----------
 * @param {String} filter 
 */

const getTodos = (filter = Filters.All) => {

    switch (filter) {

        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);    //  return state.todos.filter(todo => todo.done === true);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);   //  return state.todos.filter(todo => todo.done === false);

        default:
            throw Error(`Option ${filter} is not valid`);
    }

}



/**
 * ----------  Función que Añade 'Todo'  ----------
 * @param {String} description 
 */

const addTodo = (description) => {

    if (!description) throw Error('Not Implemented');

    state.todos.push(new Todo(description));

    saveStateToLocalStorage();

}



/**
 * ----------  Función que Cambia el 'done' del 'Todo' a true o false  ----------
 * @param {String} todoId 
 */

const toggleTodo = (todoId) => {

    //throw Error('Not Implemented');
    state.todos = state.todos.map( todo => {
        if(todo.id === todoId) todo.done = !todo.done;
        return todo;
    });

    saveStateToLocalStorage();

}



/**
 * ----------  Función que recibe el todoId y lo elimina  ---------- 
 * @param {String} todoId 
 */

const deleteTodo = (todoId) => {

    //throw Error('Not Implemented');

    //  -----  Regresa todos los 'todos' cuyo 'id' no sea igual al que queremos eliminar  -----
    state.todos = state.todos.filter(todo => todo.id !== todoId);

    saveStateToLocalStorage();

}



/**
 * ----------  Función que elimina todos los completados  ----------
 */
const deleteCompleted = () => {

    //throw Error('Not Implemented')
    //  -----  elimina todos los que esten completados  -----
    state.todos = state.todos.filter(todo => !todo.done);

    saveStateToLocalStorage();

}



/**
 * ----------  Función para establecer el 'filtro'  ----------
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {

    //throw Error('Not Implemented');
    state.filter = newFilter;

    saveStateToLocalStorage();

}



/**
 * ----------  Función para Saber el 'filtro' seleccionado  ----------
 */
const getCurrentFilter = () => {

    //throw Error('Not Implemented');
    return state.filter;

}



//  ----------  Exportamos los Objetos y Métodos  ----------
export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
}
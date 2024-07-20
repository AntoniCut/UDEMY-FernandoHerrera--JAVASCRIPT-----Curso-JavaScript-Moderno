//  *****************************************
//  **********  /src/todos/app.js  **********
//  *****************************************


//  *************************************************
//  **********  Creacion de la Aplicación  **********
//  *************************************************


//  -----  Importamos el app.html en crudo para que vite sepa que no es un archivo js  -----
import html from './app.html?raw';

import todoStore, { Filters } from '../store/todo.store';
import { renderTodos, renderPending } from './uses-cases';


//  ----------  Definición de IDs y Clases para las Referencias al HTML  ----------
const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count'
}



/**
 * ----------  App()  ----------
 * @param {String} elementId 
 */

export const App = (elementId) => {


    //  -----  Mostramos todos los 'Todos'  -----
    const displayTodos = () => {

        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        //console.log("Mostramos todos los 'Todos '", todos);

        renderTodos(ElementIDs.TodoList, todos);       //  Renderizamos por el selector que le pasamos.
        updatePendingCount();                          //  Llama a renderPending() que renderiza el Nº de tareas pendientes.

    }


    //  -----  Obtenemos el Nº de tareas pendientes que tenemos  -----
    const updatePendingCount = () => {

        renderPending(ElementIDs.PendingCountLabel);

    }



    //  ----------  Función Anonima Autoinvocada que se va ha invocar cuando la función App() se llama  ----------
    (() => {

        console.warn('¡¡¡ Documento Cargado !!!');
        const app = document.createElement('div');
        //app.innerHTML = '<h1> Hola Mundo </h1>';
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

        displayTodos();

    })();


    //  ----------  Referencias al HTML  ----------
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.ClearCompletedButton);
    const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);


    //  -----  Listener del Input de Introducir la Tarea  -----
    newDescriptionInput.addEventListener('keyup', (event) => {

        //console.log("Evento al pulsar una tecla: ", event, "\nvalue del target: ", event.target.value);

        //  -----  Validaciones.
        if (event.keyCode !== 13) return;       //  pulsamos 'enter'.
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';

    });


    //  -----  Listener al pulsar en una Tarea  -----
    todoListUL.addEventListener('click', (event) => {

        //console.log("Evento al pulsar en tarea: ", event.target);

        const element = event.target.closest('[data-id]');   //  Busca el padre mas cercano que tenga el 'data-id'.
        //console.log("Padre mas cercano: ", element);
        //console.log("Obtenemos el ID: ", element.getAttribute('data-id'));      //  Obtenemos el ID.

        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();

    });



    //  -----  Listener al pulsar la 'X' y elimina un Todo  -----
    todoListUL.addEventListener('click', (event) => {


        const isDestroyElement = event.target.className === 'destroy';
        //console.log({ isDestroyElement });

        const element = event.target.closest('[data-id]');   //  Busca el padre mas cercano que tenga el 'data-id'.

        if (!element || !isDestroyElement) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();

    });



    //  -----  Listener al pulsar el botón 'Borrar Completados'  -----
    clearCompletedButton.addEventListener('click', () => {

        todoStore.deleteCompleted();
        displayTodos();

    });


    //  -----  Listener que al pulsar en un botón selecciona dicho botón  -----
    filtersLIs.forEach(element => {

        element.addEventListener('click', (element) => {

            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            //console.log(element.target.text);

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }

            displayTodos();

        });

    });


}
//  ********************************
//  **********  /main.js  **********
//  ********************************


import './style.css';
import {App} from './src/todos/app';
import todoStore from './src/store/todo.store'

//console.log('Hola Mundo');

todoStore.initStore();
App('#app');

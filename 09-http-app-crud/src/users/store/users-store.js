//  ***********************************************************************
//  **********  /09-http-app-crud/src/users/store/user-store.js  **********
//  ***********************************************************************

import { loadUsersByPage, totalPages } from "../use-cases/load-users-by-page";


//  -----  Punto Inicial del Store  -----
const state = {
    currentPage: 0,
    users: [],
}


/**
 * ----- ir a la pagina siguiente  -----
 */
const loadNextPage = async () => {

    //throw new Error('No Implementado');
    if (state.currentPage === totalPages) return;

    const users = await loadUsersByPage(state.currentPage + 1);

    state.currentPage += 1;
    state.users = users;
}


/**
 * ----- ir a la pagina anterior  -----
 */
const loadPreviousPage = async () => {

    //throw new Error('No Implementado');
    if (state.currentPage === 1) return;

    const users = await loadUsersByPage(state.currentPage - 1);
    //console.log("state.currentPage = ", state.currentPage);

    state.currentPage -= 1;
    state.users = users;
}


/**  -----  cuando un usuario cambia  -----
 * TODO: implementar
 */
const onUserChange = () => {
    throw new Error('No Implementado');
}


/**
 * -----  recargar la página actual  -----
 */
const reloadPage = async () => {
    throw new Error('No Implementado');
}


/**
 * -----  exportacion por defecto de métodos  -----
 */
export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    /**
     * -----  getUsers()  -----
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * -----  getCurrentPage()  -----
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage
}

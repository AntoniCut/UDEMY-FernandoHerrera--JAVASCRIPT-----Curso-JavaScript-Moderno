//  ***********************************************************************
//  **********  /09-http-app-crud/src/users/store/user-store.js  **********
//  ***********************************************************************


import { loadUsersByPage, totalPages } from "../use-cases/load-users-by-page";


//  -----  Punto Inicial del Store  -----
const state = {
    currentPage: 0,
    users: [],
}


//  -----  Ir a la Página Siguiente  -----
const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1 );
    if ( users.length === 0 ) return;
    if(state.currentPage === totalPages) return;

    state.currentPage += 1;
    state.users = users;
}


//  -----  Ir a la Página Anterior  -----
const loadPreviousPage = async() => {
    if ( state.currentPage === 1 ) return;
    const users = await loadUsersByPage( state.currentPage - 1 );
    
    state.users = users;
    state.currentPage -= 1;
}


/**
 * -----  Cuando un Usuario Cambia  -----
 * @param {User} updateUser 
 */

const onUserChanged = (updatedUser) => {

    let wasFound = false;

    state.users = state.users.map( user => {
        if ( user.id === updatedUser.id ) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    });

    if ( state.users.length < 10 && !wasFound ) {
        state.users.push( updatedUser );
    }

}


//  -----  Recarga la Página Actual  -----
const reloadPage = async() => {
    const users = await loadUsersByPage( state.currentPage );
    if ( users.length === 0 ) {
        await loadPreviousPage();
        return;
    } 
    
    state.users = users;
}


//  -----  Exportacion por Defecto de los Métodos  -----
export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}
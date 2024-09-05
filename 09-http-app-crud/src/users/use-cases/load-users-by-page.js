//  ***********************************************************************************
//  **********  /09-http-app-crud/src/users/use-cases/load-users-by-page.js  **********
//  ***********************************************************************************


import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

export let totalPages, items;

/**
 * -----  Cargar Usuarios por página  -----
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */

export const loadUsersByPage = async (page = 1) => {
    
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    // -----  Asigna el número total de páginas
    totalPages = data.pages;
    items = data.items;
    console.warn("totalPages: ", totalPages, "items: ", items);

    if (page > totalPages) return null; // Si la página solicitada es mayor al total, devolver null

    //  -----  Mapper  localhostUserToModel  -----
    const users = data.data.map(localhostUserToModel);
    return users;
}


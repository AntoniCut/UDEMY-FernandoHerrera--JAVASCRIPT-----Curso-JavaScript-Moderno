//  **************************************************************************************
//  **********  /09-http-app-crud/src/users/mapper/user-to-localhost.mapper.js  **********
//  **************************************************************************************


import { User } from '../models/user';


/**
 * -----  Mapper de User --  Regresa una instancia de usuarios  -----
 * @param {User} user 
 * @returns {Object}
 */

export const userModelToLocalhost = ( user ) => {

    //  -----  Desestructuramos el User del Model -----  USUARIO
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    //  -----  Regresa un Objeto de Usuarios  -----  BACKEND
    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }

}
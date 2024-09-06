//  ***********************************************************************************
//  **********  /09-http-app-crud/src/users/mapper/localhost-user.mapper.js  **********
//  ***********************************************************************************


import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {

    //  -----  Desestructuramos el localhostUser como vienen los datos en el backend -----  BACKEND
    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    //  -----  Regresa una Instancia de Usuarios  -----  USUARIO
    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
}
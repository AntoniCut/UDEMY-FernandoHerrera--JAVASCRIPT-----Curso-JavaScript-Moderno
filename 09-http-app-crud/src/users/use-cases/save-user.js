//  ***************************************************************************
//  **********  /09-http-app-crud/src/users/use-cases/save-usere.js  **********
//  ***************************************************************************


import { User } from '../models/user'
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { localhostUserToModel } from '../mappers/localhost-user.mapper';


/**
 * -----  Salvar/Guardar/Actualizar Usuario  ----- 
 * @param {Like<User>} userLike 
 */

export const saveUser = async( userLike ) => {

    const user = new User( userLike );

    if ( !user.firstName || !user.lastName ) 
        throw 'First & last name are required';


    //  -----  mapper userModelToLocalhost  -----
    const userToSave = userModelToLocalhost( user );
    
    let userUpdated;

    if ( user.id ) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser( userToSave );
    }

    return localhostUserToModel( userUpdated );
}


/**
 * -----  Creación de un Usuario  -----
 * @param {Like<User>} user 
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    
    //  -----  Realizamos un Posteo de la Respuesta  -----
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),                 //  serializar un objeto a un STRING.
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //  -----  Si Todo sale Bien - Tenemos un Usuario Creado  -----
    const newUser = await res.json();       //  ahora convertimos a JSON.
    //console.log({ newUser });

    return newUser;
}


/**
 * -----  Actualización de un Usuario  -----
 * @param {Like<User>} user 
 */

 const updateUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`;
    
    //  -----  Realizamos un Posteo de la Respuesta  -----
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),                 //  serializar un objeto a un STRING.
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //  -----  Si Todo sale Bien - Tenemos un Usuario Actualizado  -----
    const updatedUser = await res.json();   //  ahora convertimos a JSON.
    //console.log({ updatedUser });

    return updatedUser;
}

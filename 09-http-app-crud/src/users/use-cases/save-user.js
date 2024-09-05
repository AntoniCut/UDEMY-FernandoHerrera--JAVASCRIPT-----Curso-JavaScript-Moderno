//  ***************************************************************************
//  **********  /09-http-app-crud/src/users/use-cases/save-usere.js  **********
//  ***************************************************************************


import { userModelTolocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user"


/**
 * -----  Salvar Usuario  ----- 
 * @param {Like<User>} userLike 
 */

export const saveUser = async (userLike) => {

    const user = new User(userLike);

    //  -----  mapper userModelToLocalhost  -----
    const userToSave = userModelTolocalhost(user);

    if (user.id) {
        throw 'No Implementada la actualizacion';
        return;
    }

    //const updateUser = await createUser( user);
    //return updateUser;

    return await createUser( userToSave);      //  igual que las 2 lineas comentadas.

}


/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async (user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`;

    //  -----  Realizamos un Posteo de la Respuesta  -----
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),     //  serializar un objeto a un STRING.
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //  -----  Si Todo sale Bien - Tenemos un Usuario Creado  -----
    const newUser = await res.json();      //  ahora convertimos a JSON.

    console.log("newUser: ", { newUser })
    return newUser;
}
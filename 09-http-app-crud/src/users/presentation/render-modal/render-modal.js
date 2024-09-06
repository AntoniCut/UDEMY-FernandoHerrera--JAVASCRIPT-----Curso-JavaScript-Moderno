//  *********************************************************************************************  
//  **********  /09-http-app-crud/src/users/presentation/render-modal/render-modal.js  **********  
//  *********************************************************************************************


import modalHtml from './render-modal.html?raw';
import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';
import './render-modal.css';


//  -----  Variables Globales  -----
let modal, form;
let loadedUser = {};


/**
 * -----  Función que Muestra el Modal  ----- 
 * @param {String|Number} id 
 */

export const showModal = async( id ) => {
    modal?.classList.remove('hide-modal');
    loadedUser = {};

    if ( !id ) return;
    const user = await getUserById( id );
    setFormValues(user);
}


//  -----  Funcion que Oculta el Modal  -----
export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}


/**
 * -----  Obtener la Información del Formulario  -----
 * @param {User} user 
 */

const setFormValues = ( user ) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}


/**
 * -----  renderModal()  ----- 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>}  callback
 */

export const renderModal = ( element, callback ) => {

    if ( modal ) return;

    //  -----  Creación del modal en el HTML  -----
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    
    //  -----  creación de una Referencia al formulario  -----
    form = modal.querySelector('form');


    //  ----------  LISTENER  ----------

    //  -----  click en qualquier lugar de la pagina si el modal se visualiza y asi cerrarlo  -----
    modal.addEventListener('click', (event) => {
        if ( event.target.className === 'modal-container' ) {
            hideModal();
        }
    });


    //  -----  click al enviar el formulario boton save  -----  FORMULARIO
    form.addEventListener('submit', async(event) => {
        event.preventDefault();
        
        const formData = new FormData( form );
        const userLike = { ...loadedUser };

        for (const [key, value] of formData) {
            if ( key === 'balance' ){
                userLike[key] =  +value;
                continue;
            }

            if ( key === 'isActive' ) {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }
            
            userLike[key] = value;
        }

        // Alternar el valor de isActive antes de guardarlo
        userLike.isActive = !userLike.isActive;
        
        // console.log(userLike);
        await callback( userLike );

        hideModal();        
    });

    //  -----  Añadimos el 'modal' al HTML  -----
    element.append( modal );


    //  *****  Inicializar jQuery UI  --  Draggable  *****
    $(document).ready(function () {
        $('.modal-dialog').draggable();
    });

}

//  ***********************************************************************************************  
//  **********  /09-http-app-crud/src/users/presentation/render-modal/render-modal.html  **********  
//  ***********************************************************************************************


import modalHTML from './render-modal.html?raw';
import './render-modal.css';
//import { items } from '../../use-cases/load-users-by-page';


let modal, form;

//  TODO: Cargar usiario por ID.

//  -----  Función que Muestra el Modal  -----
export const showModal = () => {

    modal?.classList.remove('hide-modal');
}


//  -----  Función que Oculta el Modal  -----
export const hideModal = () => {

    //  -----  Reset del Formulario  -----
    form?.reset();

    //  -----  Oculta el Modal  -----
    modal?.classList.add('hide-modal');
}


/**
 * -----  renderModal()  ----- 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>}  callback
 */

export const renderModal = (element, callback) => {

    if(modal) return;

    //  -----  Creación del modal  -----
    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';

    //  -----  creación de una Referencia al formulario  -----
    form = modal.querySelector('form');

    
    //  -----  click en qualquier lugar de la pagina si el modal se visualiza y asi cerrarlo  -----
    modal.addEventListener('click', (event) => {

        console.log("\nevent.target modal: ",event.target)
        if(event.target.className === 'modal-container') hideModal();
    });

    //  -----  click al enviar el formulario boton save  -----
    form.addEventListener('submit', async(event) => {

        event.preventDefault();
        //console.log("\nevent submit - Formulario Enviado: ", event);
        
        //  -----  Serializamos los datos del formulario  -----
        const formData = new FormData(form);
                
        const userLike = {};
        

        for (const [key, value] of formData) {
            
            //console.log("iterator: ", "key: ", key, "value: ", value);

            //  -----  Validaciones  -----
            if( key === 'id') {
                //value = String(items);
                userLike[key] = value;
                continue;
            }
            
            if ( key === 'balance' ){
                userLike[key] =  +value;        //  Convertimos a Number.
                continue;
            }

            if ( key === 'isActive' ) {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }
            
            

            userLike[key] = value;
        }

        console.log("userLike: ", userLike);

        //  -----  Llamamos al callback()  -----
        await callback(userLike);
        
        //  -----  Ocultamos el Modal  -----
        hideModal();
    });

    //  -----  Añadimos el 'modal' al HTML  -----
    element.append(modal);
}
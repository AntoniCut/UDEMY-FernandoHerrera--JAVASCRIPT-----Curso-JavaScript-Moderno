//  *******************************************************************************************************  
//  **********  /09-http-app-crud/src/users/presentation/render-add-button/render-add-button.js  **********  
//  *******************************************************************************************************  


import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';


/**
 * -----  renderAddButton()  -----
 * @param {HTMLDivElement} element 
 * @param {()=>void} callback
 */

export const renderAddButton = (element, callback) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    fabButton.addEventListener('click', () => {

        //throw Error('No Implementado');
        //if(!callback) return;
        callback();
        showModal();
    });
}
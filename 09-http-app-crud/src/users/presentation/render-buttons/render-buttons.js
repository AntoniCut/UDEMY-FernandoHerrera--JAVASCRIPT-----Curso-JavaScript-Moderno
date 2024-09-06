//  *************************************************************************************************
//  **********  /09-http-app-crud/src/users/presentation/render-buttons/render-buttons.js  **********
//  *************************************************************************************************


import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';


/**
 * -----  Renderizado de los Botones  -----
 * @param {HTMLDivElement} element 
 */

export const renderButtons = (element) => {

    //  -----  Creamos un 'div' que contiene a los botones y el 'nº de página'  -----
    const divButtonsPage = document.createElement('div');
    divButtonsPage.classList.add('divButtonsPage');

    //  -----  Creamos el nextButton  -----
    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';
    nextButton.classList.add('button-pages');

    //  -----  Creamos el prevButton  -----
    const prevButton = document.createElement('button');
    prevButton.innerText = ' < Prev ';
    prevButton.classList.add('button-pages');

    //  -----  Creamos un 'span' para el 'nº de página'  -----
    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    //  -----  Añadimos al HTML  -----
    divButtonsPage.append(prevButton, currentPageLabel, nextButton);
    element.append(divButtonsPage);


    //  -----  Listener para darle funcionalidad a los botones  -----

    // Listener para el botón Next
    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });

    // Listener para el botón Prev
    prevButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });

}


















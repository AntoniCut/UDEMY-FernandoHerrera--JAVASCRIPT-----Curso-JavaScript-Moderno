//  ****************************************************************
//  **********  /09-http-app-crud/src/users/users-app.js  **********
//  ****************************************************************


import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";


/**
 * -----  App de los Usuarios  -----
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) => {

    element.innerHTML = 'Loading...';

    await usersStore.loadNextPage();

    //console.log("\ngetUsers(): ", usersStore.getUsers());
    //console.log("getCurrentPage(): ", usersStore.getCurrentPage());
    
    element.innerHTML = '';

    //  -----  Renderizado de Elementos  -----
    renderTable(element);
    renderButtons(element);
    renderAddButton(element, () => { console.log("callback(): - Desde el Padre") });
    
    renderModal(element, async(userLike) => {
        
        const user = await saveUser(userLike);
        usersStore.onUserChange(user);
        renderTable();

    });

}
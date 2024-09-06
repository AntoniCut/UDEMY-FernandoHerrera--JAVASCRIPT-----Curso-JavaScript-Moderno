//  *********************************************************************************************
//  **********  /09-http-app-crud/src/users/presentation/render-table/render-table.js  **********
//  *********************************************************************************************


import usersStore from '../../store/users-store';
import { showModal } from '../render-modal/render-modal';
import { deleteUserById } from '../../use-cases/delete-user-by-id'
import './render-table.css';


//  -----  Variable Global  -----
let table;


//  -----  Creacion de una Tabla HTML  -----
const createTable = () => {
    
    const table = document.createElement('table');              //  elemento 'table'
    const tableHeaders = document.createElement('thead');       //  elemento 'thead'
    tableHeaders.classList.add('table-headers');                //  clase 'table-headers'
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FistName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append( tableHeaders, tableBody )
    return table;
}


/**
 * -----  Click en Select  -----
 * @param {MouseEvent} event 
 */

const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user');
    if ( !element ) return;

    const id = element.getAttribute('data-id');
    showModal(id);
}


/**
 * -----  Click en Delete  -----
 * @param {MouseEvent} event 
 */

const tableDeleteListener = async(event) => {
    const element = event.target.closest('.delete-user');
    if ( !element ) return;

    const id = element.getAttribute('data-id');
    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();
        
    } catch (error) {
        console.log(error);
        alert('No se pudo eliminar');
    }
}


/**
 * -----  Renderiza Tabla de Usuarios  -----
 * @param {HTMLDivElement} element 
 */

export const renderTable = ( element ) => {

    const users = usersStore.getUsers();

    if ( !table ) {
        table = createTable();
        element.append( table );
        //$('table').draggable();

        //  -----  Crear Listener SELECT  ----- 
        table.addEventListener('click', tableSelectListener );

        //  -----  Crear Listener DELETE  -----
        table.addEventListener('click', tableDeleteListener );
    }
    
    
    //  -----  Renderizar los datos de los registros de la tabla  -----
    let tableHTML = '';
    
    users.forEach( user => {
        tableHTML += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#/" class="select-user" data-id="${ user.id }">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${ user.id }">Delete</a>
                </td>
            </tr>
        `
    });
    
    //  -----  ñadimos la Tabla al HTML  -----
    table.querySelector('tbody').innerHTML = tableHTML;
}
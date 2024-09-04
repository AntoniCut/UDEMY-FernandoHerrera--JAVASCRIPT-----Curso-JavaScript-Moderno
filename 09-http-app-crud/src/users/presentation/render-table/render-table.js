//  *********************************************************************************************
//  **********  /09-http-app-crud/src/users/presentation/render-table/render-table.js  **********
//  *********************************************************************************************


import usersStore from '../../store/users-store';
import './render-table.css';


let table;

//  -----  Creacion de una Tabla HTML  -----
const createTable = () => {
    
    //  -----  Creamos elementos HTML de la Tabla  -----
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.classList.add('table-headers');
    tableHeaders.innerHTML = `
        <tr>
            <th> #ID </th>
            <th> Balance </th>
            <th> FistName </th>
            <th> LastName </th>
            <th> Active </th>
            <th> Actions </th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody)
    return table;
}


/**
 * -----  Renderiza Tabla de Usuarios  -----
 * @param {HTMLDivElement} element 
 */

export const renderTable = (element) => {

    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);

        //  TODO:  -----  Listener a la Tabla  ----- 
    }

    //  -----  Renderizar los datos de los registros de la tabla  -----
    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#/" class="select-user" data-id="${user.id}">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
                </td>
            </tr>
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML;

}
//  *********************************************************
//  **********  /src/concepts/01-envirounments.js  **********
//  *********************************************************


/**
 * -----  functión --  enviroumentsComponents --  Variables de Entorno -----
 * @param {HTMLDivElement} element 
 */

export const envirounmentsComponent = ( element ) => {

    console.warn("-----  Variables de Entorno  -----");
    console.log( import.meta.env);

    const html = `
        Dev: ${ import.meta.env.DEV} <br>
        Prod: ${ import.meta.env.PROD} <br>
        KEY: ${ import.meta.env.VITE_API_KEY} <br>
        URL: ${ import.meta.env.VITE_BASE_URL} <br>
        
    `;

    element.innerHTML = html;

}
//  ********************************************************
//  **********  /src/todos/models/todo.models.js  **********
//  ********************************************************


//  ----------  Importamos la función 'uuid()' que genera 'Ids' aleatorios  ----------
import { v4 as uuid} from 'uuid';


//  ----------  Clase que representa un modelo de datos  ----------
export class Todo {


    /**
     * @param {String} description 
     */
    constructor(description) {

        this.id = uuid();                   //  libreria uuid() para generar Ids aleatorios.
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }


}
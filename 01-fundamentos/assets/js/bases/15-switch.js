//  **************************************************************
//  **********  /01-fundamentos/assets/js/15-switch.js  **********
//  **************************************************************

//  **********  Switch  **********

const dia = 2;      // 0: Domingo, 1: Lunes.

switch ( dia ) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Dia Incorrecto');
}
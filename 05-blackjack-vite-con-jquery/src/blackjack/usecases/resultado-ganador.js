//  *************************************************************
//  **********  /src/blackjack/usecases/crear-deck.js  **********
//  *************************************************************


import $ from 'jquery';
import { gsap } from "gsap";
import { Bounce } from "gsap/all";  // Importa Bounce


// Registra el ease en GSAP.
gsap.registerPlugin(Bounce);


//  **********  Función que Muestra el Ganador con una Animacion  **********
//  **********  Código de jQuery y Animaciones de GSAP  ********************

export const resultadoGanador = (mensaje) => {
    
    //  Referencias al HTML.
    const $boxResultado = $('#boxResultado');
    const $mensaje = $('.mensaje');

    // Mostrar la caja antes de la animación
    $boxResultado.show();
    $mensaje.text(mensaje);

    // Obtener las dimensiones de la pantalla
    const altoP = $(window).height();

    // Crear la línea de tiempo de GSAP
    const tl = gsap.timeline();

    // Realizar la animación hasta el centro de la pantalla.
    tl.fromTo($boxResultado,
        { top: -150 }, // Posición inicial fuera de la pantalla
        { top: (altoP / 2) - ($boxResultado.height() / 2), duration: 2, ease: "bounce.out" } // Animar al centro
    );

    //  Opacity 1 en la Parada.
    tl.to($boxResultado, { opacity: 1});


    // Añadir un retraso de 3 segundos y luego animar la caja para que descienda hasta la parte inferior
    tl.to($boxResultado,
        { top: altoP, duration: 2, ease: "power1.in" },
        "+=3" // Añadir un retraso de 3 segundos antes de ejecutar esta animación
    )
        .set($boxResultado, { display: "none" }); // Ocultar la caja al final de la animación

}


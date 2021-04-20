'use strict'

window.addEventListener('load', () => {

    //Eventos del ratón
    function cambiarColor() {
        var bg = boton.style.background;
        if (bg == 'green') {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }
        boton.style.padding = '10px';
        boton.style.border = "2px solid #ccc";
    }
    var boton = document.querySelector("#boton");
    // Click
    boton.addEventListener('click', () => {
        cambiarColor();
    });

    // Mouse over
    boton.addEventListener('mouseover', () => {
        boton.style.background = '#ccc';
    });

    // Mouseout
    boton.addEventListener('mouseout', function () {
        boton.style.background = " black";
    });

    // Focus 

    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', () => {
        console.log('Estas dentro del input');
    });
    //Blur
    input.addEventListener('blur', () => {
        console.log('Estas fuera del input');
    });
    // Keydown
    input.addEventListener('keydown', function (event) {
        console.log('[keydown] Pulsando esta tecla', String.fromCharCode(event.keyCode));
        // console.log(event.keyCode);
        // console.log(String.fromCharCode(event.keyCode))
    });

    // Keypress
    input.addEventListener('keypress', function (event) {
        console.log('[keypress] Tecla presionada', String.fromCharCode(event.keyCode));
    });
    // Keyup
    input.addEventListener('keyup', function (event) {
        console.log('[keyup] Tecla soltada', String.fromCharCode(event.keyCode));
    });
}); // end load 
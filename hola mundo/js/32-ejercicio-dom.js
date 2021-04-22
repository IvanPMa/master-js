'use strict'
window.addEventListener('load',function(){
    console.log('DOM Cargado');
    
    var formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function(){
        console.log('Evento sumbit capturado');
    })

});
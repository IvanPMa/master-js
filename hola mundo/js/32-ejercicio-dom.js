'use strict'
window.addEventListener('load',function(){
    console.log('DOM Cargado');
    
    var formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function(){
        console.log('Evento sumbit capturado');
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;
    })

});
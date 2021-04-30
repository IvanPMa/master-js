'use strict'
window.addEventListener('load',function(){
    console.log('DOM Cargado');
    
    var formulario = document.querySelector('#formulario');

    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function(){
        console.log('Evento sumbit capturado');
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;

        box_dashed.style.display = 'block';
        
        console.log(nombre,apellidos,edad);
    })

});
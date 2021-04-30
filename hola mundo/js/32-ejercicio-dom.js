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
        let p_nombre = document.querySelector('#p_nombre span');
        let p_apellidos = document.querySelector('#p_apellidos span');
        let p_edad = document.querySelector('#p_edad span');
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


        /*
        Primer forma de mostrar los datos en el box dashed
        var datos_usuario = [nombre, apellidos, edad ];
        
        for (let indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        } */

    })

});
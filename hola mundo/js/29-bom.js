'use strict'
// BOM - Browser Object Model
function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);
}

getBom();

// funcion para redirigirnos a otra pagina

function redirect(url){
    window.location.href = url;
}                                                      

// funcion para abrir una pagina en una nueva pestaña

function abrirVentana(url){
    window.open(url, "","width=400,height=300");
}
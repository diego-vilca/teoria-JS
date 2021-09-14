/**
 * Anteriormente, si queriamos un sitio web con varias paginas, lo lograriamos usando diferentes paginas (archivos) HTML.
 * Ahora, tenemos la capacidad de cargar una sola pagina y luego usar JS para manopular el DOM.
 * 
 * Una ventaja importante de hacer esto es que solo necesitamos modificar la parte de la pagina que realmente esta cambiando. 
 * Por ejemplo, si tenemos una barra de navegacion que no cambia en funcion de su pagina actual, no querriamos tener que volver
 * a renderizar esa barra de navegacion cada vez que cambiamos a una nueva parte de la pagina.
 * 
 */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        
        button.onclick = function() {//Revisar por que tira error cuando la funcion es tipo arrow
            //ver como funciona this en arrow functions
            //mostrar cada pagina
            //console.log(this);
            mostrarPagina(this.dataset.pagina);
        }
    });
})


function mostrarPagina(pagina){
    //por si quedo algun div visible
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    document.querySelector(`#${pagina}`).style.display = 'block';
}
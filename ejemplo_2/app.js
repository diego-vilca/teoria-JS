//si el item no existe setea a contador como null
let contador = localStorage.getItem('contadorAlmacenado');

//En expresiones aritmeticas null es equivalente a cero
//Por eso en este caso puedo operar con contador sin inicializarlo previamente
function conteo() {
     contador++; 
     localStorage.setItem('contadorAlmacenado', contador);

     document.querySelector('p').innerHTML = contador;

     if(contador % 10 === 0) {
         alert(`Contador ahora es ${contador}`);
     }
 }

 /**el nombre de una funcion sin los parentesis es una referencia hacia esa funcion */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('p').innerHTML = localStorage.getItem('contadorAlmacenado');
    document.querySelector('button').onclick = conteo;
});


/**función */
/**funcion declarada: */
function fecha() {
    document.getElementById("fecha").innerHTML = Date(); 
}
/** Las funciones declaradas pueden ser invocadas antes de haberse declarado (ver hoisting (elevación)) 
 * sin generar errores
*/

/**funciones anónimas: función sin nombre */
//ver el ejemplo 3


/**funcion expresada: Tambien llamada funcion como variable. Se da cuando a una variable se asigna una funcion anonima (se suele usar const)*/
// const hola = function() {
//     console.log("Hola Mundo");
// }
// setTimeout(hola, 1000);

/**función como parametro */
// setTimeout( function() {
//     console.log("Hola Mundo");
// }, 5000);

/**funcion arrow */
/**cuando una funcion flecha recibe UN parametro no es necesario que vaya entre parentesis */
/**si la funcion solo ocupa una linea de codigo no son necesarios las llaves */
// const sumar = function(a, b) {
//     return a + b;
// }

// //esto es lo mismo que...

// const sumar = (a , b) => a + b;



setTimeout( () => {
    console.log("Hola Mundo");
},5000)
//==============================================================================================================

/**Estructura foreach:
 * 
 * array.forEach(function(element, index){  
 *      console.log("el elemento es: ${element} y se encuentra en la posicion ${index}");
 * })
 */


//==============================================================================================================

/*
Event listeners:

Syntax
Let's now look at the rules of syntax that apply and make sure we understand the parameters required:

    element.addEventListener(event, functionName, useCapture);


We'll now explain it to you step by step:

The first parameter specifies the event type (e.g. "click" or "mousedown").
The second parameter defines the function to be called and executed when the event occurs.
The optional third parameter is a boolean value using which you may specify whether to use event capturing or bubbling.
*/ 



// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll('button').forEach(button => {
//         button.onclick = () => {
//             document.querySelector("#fecha").style.color = "blue";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('button').forEach(button => { 
        button.onclick = () => {
            document.querySelector("#fecha").style.color = button.dataset.color;
        }
    });
});
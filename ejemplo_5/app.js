/**
 * SCROLL
 * 
 * Para actualizar y acceder al historial del navegador, utilizamos un objeto JavaScript importante conocido
 * como 'window'. Hay algunas otras propiedades de window que podemos usar para hacer que nuestros sitios se vean mejor.
 * 
 * window.innerWidth: Ancho de la ventana en pixeles
 * window.innerHeight: Altura de la ventana en pixeles
 * 
 * Si bien window representa lo que actualmente es visible para el usuario, el documento se refiere a la pagina web completa,
 * que a menudo es mucho mas grande que la ventana, lo que obliga al usuario a desplazarse hacia arriba y hacia abajo para ver el contenido de la pagina. Para trabajar con nuestro desplazamiento tenemos acceso a otras variables:
 * 
 * window.scrollY: cuantos pixeles hemos desplazado desde la parte superior de la pagina
 * document.body.offsetHeight: la altura en pixeles de todo el documento
 */

window.onscroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector('body').style.background = 'green';
    }else {
        document.querySelector('body').style.background = 'yellow';
    }
}
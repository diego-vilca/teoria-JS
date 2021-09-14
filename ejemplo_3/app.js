document.addEventListener('DOMContentLoaded', () => {
    //si la funcion no fuera anonima deberia definir que sea asinc (?)
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(response => response.json())
    .then(data => {
        var dolar_compra = parseFloat(data[0].casa.compra);
        //al castearlo a float puedo utilizar el metodo to fixed para mostrarlo con decimales
        document.querySelector('p').innerHTML = `Un dolar es igual a ${dolar_compra.toFixed(2)} ARS en tipo de cambio oficial (compra) `;
    });
});
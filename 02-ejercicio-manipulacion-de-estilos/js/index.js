function cambiarColor(color) {
    const fondo = document.getElementById('colores');
    if (color === 'rojo') {
        document.body.style.backgroundColor = 'red';
        fondo.style.backgroundColor = '#ffcccc';
    } else if (color === 'verde') {
        document.body.style.backgroundColor = 'green';
        fondo.style.backgroundColor = '#ccffcc';
    } else if (color === 'azul') {
        document.body.style.backgroundColor = 'blue';
        fondo.style.backgroundColor = '#ccccff';
    } else {
        document.body.style.backgroundColor = 'white';
        fondo.style.backgroundColor = '#f0f0f0';
    }
}
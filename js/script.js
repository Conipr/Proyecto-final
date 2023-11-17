document.addEventListener('DOMContentLoaded', function () {
    // Ocultar inicialmente todos los testimonios
    const testimonios = document.querySelectorAll('.testimonio');
    testimonios.forEach(t => t.style.display = 'none');

    // Índice actual
    let indiceActual = 0;

    // Testimonio en base al índice
    function mostrarTestimonio(indice) {
        testimonios.forEach(t => t.style.display = 'none');
        testimonios[indice].style.display = 'block';
    }

    // Rotar testimonios automáticamente cada 5 segundos
    function rotar() {
        indiceActual = (indiceActual + 1) % testimonios.length;
        mostrarTestimonio(indiceActual);
    }

    // Configurar intervalo para la rotación automática
    const intervaloRotacion = setInterval(rotar, 5000);

    // Función para reiniciar el intervalo de rotación automática
    function reiniciarIntervalo() {
        clearInterval(intervaloRotacion);
        intervaloRotacion = setInterval(rotar, 5000);
    }

    // Mostrar el primer testimonio al cargar la página
    mostrarTestimonio(indiceActual);
});


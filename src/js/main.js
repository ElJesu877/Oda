// Seleccionar todas las tarjetas
const curiosidadCards = document.querySelectorAll('.curiosidad-card');

// Función para mostrar tarjetas con animación
function showCards() {
    curiosidadCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 150); // Retardo entre tarjetas para efecto dinámico
    });
}

// Ejecutar función después de que la página cargue
window.addEventListener('load', showCards);

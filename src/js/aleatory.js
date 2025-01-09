// Array de frases célebres de Eiichirō Oda


const frases = [
    "Cuando alguien ríe, es un buen momento.",
    "El poder para lastimar a otros es algo que debes mantener en secreto.",
    "Si no puedes arriesgar tu vida, no podrás crear un futuro.",
    "Los sueños de los hombres nunca terminan.",
    "Un héroe comparte la carne. ¡Yo quiero toda la carne!",
    "La era de los piratas nunca terminará."
];

const randomFrase = frases[Math.floor(Math.random() * frases.length)];
document.getElementById('frases').textContent = randomFrase;

const swiper = new Swiper(".swiper-card", {
    direction: "horizontal",
    loop: true,
    effect: "cube",
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});








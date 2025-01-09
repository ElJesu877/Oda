const datosTrivia = [
    {
        pregunta: "¿Cuál es la obra más conocida de Eiichirō Oda?",
        opciones: ["Naruto", "One Piece", "Bleach", "Dragon Ball"],
        correcta: 1
    },
    {
        pregunta: "¿En qué año comenzó a publicarse One Piece?",
        opciones: ["1997", "2000", "1995", "1999"],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se llama el protagonista principal de One Piece?",
        opciones: ["Naruto Uzumaki", "Ichigo Kurosaki", "Monkey D. Luffy", "Goku"],
        correcta: 2
    },
    {
        pregunta: "¿Cómo se llama el barco de los Sombreros de Paja?",
        opciones: ["Going Merry", "Thousand Sunny", "Red Force", "Victoria Punk"],
        correcta: 1
    },
    {
        pregunta: "¿Qué fruta del diablo comió Luffy?",
        opciones: ["Fruta Fuego-Fuego", "Fruta Goma-Goma", "Fruta Hielo-Hielo", "Fruta Oscuridad-Oscuridad"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el objetivo principal de Luffy?",
        opciones: ["Convertirse en el Rey de los Piratas", "Derrotar a los Yonko", "Encontrar el tesoro de Raftel", "Vengarse de los Marines"],
        correcta: 0
    },
    {
        pregunta: "¿Qué significa la 'D' en el nombre de Monkey D. Luffy?",
        opciones: ["Destino", "Determinación", "Demonio", "Es un misterio"],
        correcta: 3
    }
];

let preguntaActual = 0;
let puntaje = 0;

const elementoPregunta = document.getElementById('pregunta');
const elementoRespuestas = document.getElementById('respuestas');
const botonSiguiente = document.getElementById('boton-siguiente');
const elementoPuntaje = document.getElementById('puntuacion');
const valorPuntaje = document.getElementById('valor-puntuacion');

function cargarPregunta() {
    const preguntaTrivia = datosTrivia[preguntaActual];
    elementoPregunta.textContent = preguntaTrivia.pregunta;
    elementoRespuestas.innerHTML = '';

    preguntaTrivia.opciones.forEach((opcion, indice) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.className = 'btn btn-outline-secondary d-block mb-2 w-100';
        boton.onclick = () => verificarRespuesta(indice, boton);
        elementoRespuestas.appendChild(boton);
    });
}

function verificarRespuesta(indiceSeleccionado) {
    const preguntaTrivia = datosTrivia[preguntaActual];
    if (indiceSeleccionado === preguntaTrivia.correcta) {
        puntaje++;
    }

    Array.from(elementoRespuestas.children).forEach((btn, indice) => {
        btn.disabled = true;
        if (indice === preguntaTrivia.correcta) {
            btn.classList.add('btn-success');
        } else {
            btn.classList.add('btn-danger');
        }
    });
    botonSiguiente.classList.remove('d-none');
}

function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < datosTrivia.length) {
        cargarPregunta();
        botonSiguiente.classList.add('d-none');
    } else {
        mostrarPuntaje();
    }
}

function mostrarPuntaje() {
    elementoPregunta.textContent = '¡Has completado el quiz!';
    elementoRespuestas.innerHTML = '';
    elementoPuntaje.classList.remove('d-none');
    valorPuntaje.textContent = puntaje +" de 7";
    botonSiguiente.classList.add('d-none');
}

botonSiguiente.addEventListener('click', siguientePregunta);

cargarPregunta();

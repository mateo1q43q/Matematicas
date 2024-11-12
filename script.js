let score = 0;
let lives = 3;
let currentEquation = {};
const equations = [
    { equation: "1/x = 2", solution: "0.5" },
    { equation: "x/3 = 2", solution: "6" },
    { equation: "4/x = 1", solution: "4" },
    { equation: "x/2 = 4", solution: "8" },
    { equation: "1/(x+1) = 0.25", solution: "3" },
    { equation: "2/x = 1", solution: "2" },
    { equation: "x - 1 = 3", solution: "4" },
    { equation: "5/x = 1", solution: "5" }
];

function generateEquation() {
    // Selecciona una ecuación aleatoria de la lista
    const randomIndex = Math.floor(Math.random() * equations.length);
    currentEquation = equations[randomIndex];
    document.getElementById("equation").textContent = currentEquation.equation;
}

function checkAnswer() {
    const answer = document.getElementById("answer").value;
    
    // Verifica si la respuesta es correcta
    if (answer === currentEquation.solution) {
        score += 10;
        document.getElementById("score").textContent = "Puntaje: " + score;
        alert("¡Correcto!");
        generateEquation();
    } else {
        lives -= 1;
        document.getElementById("lives").textContent = "Vidas: " + lives;
        alert("Incorrecto. Inténtalo de nuevo.");
    }

    // Verifica si el juego termina
    if (lives === 0) {
        alert("Juego terminado. Tu puntaje final es: " + score);
        resetGame();
    }
    
    document.getElementById("answer").value = "";
}

function resetGame() {
    score = 0;
    lives = 3;
    document.getElementById("score").textContent = "Puntaje: " + score;
    document.getElementById("lives").textContent = "Vidas: " + lives;
    generateEquation();
}

// Inicia el juego con la primera ecuación
generateEquation();

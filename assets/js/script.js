// Función para generar un número aleatorio entre min y max, inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un desafío de simplificación de fracciones
function generateSimplificationChallenge() {
  let numerator, denominator, originalNumerator, originalDenominator, gcdValue;

  do {
    // Generar dos números aleatorios para numerator y denominator
    numerator = getRandomInt(2, 20); // Empezamos en 2 para asegurar numerator < denominator
    denominator = getRandomInt(2, 20);

    // Guardar los valores originales para comparación posterior
    originalNumerator = numerator;
    originalDenominator = denominator;

    // Calcular el máximo común divisor (MCD) usando el algoritmo de Euclides
    gcdValue = gcd(numerator, denominator);

    // Simplificar la fracción dividiendo por el MCD
    numerator /= gcdValue;
    denominator /= gcdValue;

    // Repetir si la fracción no es simplificable o si ya está en su forma más simple
  } while (
    gcdValue === 1 ||
    (numerator === originalNumerator && denominator === originalDenominator)
  );

  return `Simplifica la fracción: ${originalNumerator}/${originalDenominator}`;
}

// Función para calcular el máximo común divisor (GCD) usando el algoritmo de Euclides
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Función para generar un desafío de suma de fracciones
function generateSumChallenge() {
  let num1 = getRandomInt(1, 10);
  let den1 = getRandomInt(1, 10);
  let num2 = getRandomInt(1, 10);
  let den2 = getRandomInt(1, 10);
  return `Suma las fracciones: ${num1}/${den1} + ${num2}/${den2}`;
}

// Función para generar un desafío de resta de fracciones
function generateSubtractionChallenge() {
  let num1 = getRandomInt(1, 10);
  let den1 = getRandomInt(1, 10);
  let num2 = getRandomInt(1, 10);
  let den2 = getRandomInt(1, 10);
  return `Resta las fracciones: ${num1}/${den1} - ${num2}/${den2}`;
}

// Función para generar un desafío de multiplicación de fracciones
function generateMultiplicationChallenge() {
  let num1 = getRandomInt(1, 10);
  let den1 = getRandomInt(1, 10);
  let num2 = getRandomInt(1, 10);
  let den2 = getRandomInt(1, 10);
  return `Multiplica las fracciones: ${num1}/${den1} * ${num2}/${den2}`;
}

// Función para mostrar un desafío en la tarjeta
function showChallenge(challenge) {
  const cardText = document.getElementById("cardText");
  cardText.textContent = challenge;

  // Animación de tomar una carta
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.classList.add("draw");
  setTimeout(() => {
    cardContainer.classList.remove("draw");
  }, 500);
}

// Añadir eventos a los mazos
document.getElementById("simplificationDeck").addEventListener("click", () => {
  const challenge = generateSimplificationChallenge();
  showChallenge(challenge);
});

document.getElementById("sumDeck").addEventListener("click", () => {
  const challenge = generateSumChallenge();
  showChallenge(challenge);
});

document.getElementById("subtractionDeck").addEventListener("click", () => {
  const challenge = generateSubtractionChallenge();
  showChallenge(challenge);
});

document.getElementById("multiplicationDeck").addEventListener("click", () => {
  const challenge = generateMultiplicationChallenge();
  showChallenge(challenge);
});

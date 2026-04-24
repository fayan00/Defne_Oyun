const GAME_DURATION = 30;
const STARTING_LIVES = 5;
const SPAWN_INTERVAL_MS = 800;

const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const livesElement = document.getElementById("lives");
const restartButton = document.getElementById("restartBtn");
const gameArea = document.getElementById("gameArea");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");

let score = 0;
let timeLeft = GAME_DURATION;
let lives = STARTING_LIVES;
let gameActive = false;
let spawnIntervalId = null;
let timerIntervalId = null;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function updateHud() {
  scoreElement.textContent = String(score);
  timeElement.textContent = String(timeLeft);
  livesElement.textContent = String(lives);
}

function clearBalloons() {
  gameArea.querySelectorAll(".balloon").forEach((balloon) => balloon.remove());
}

function setMessage(title, text) {
  messageTitle.textContent = title;
  messageText.textContent = text;
}

function stopGame(finalMessage) {
  gameActive = false;
  clearInterval(spawnIntervalId);
  clearInterval(timerIntervalId);
  clearBalloons();
  setMessage("Oyun Bitti", finalMessage);
}

function balloonEscaped(balloon) {
  if (!gameActive || !gameArea.contains(balloon)) {
    return;
  }

  balloon.remove();
  lives -= 1;
  updateHud();

  if (lives <= 0) {
    stopGame(`Canlar bitti. Skorun: ${score}`);
  }
}

function spawnBalloon() {
  if (!gameActive) {
    return;
  }

  const areaRect = gameArea.getBoundingClientRect();
  const size = randomInRange(36, 78);
  const startX = randomInRange(0, Math.max(0, areaRect.width - size));
  const color = `hsl(${Math.floor(randomInRange(0, 360))} 85% 60%)`;
  const riseDuration = randomInRange(2200, 4200);

  const balloon = document.createElement("button");
  balloon.type = "button";
  balloon.className = "balloon";
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.left = `${startX}px`;
  balloon.style.bottom = `-${size + 24}px`;
  balloon.style.background = color;
  balloon.setAttribute("aria-label", "Balon");

  const popScore = Math.max(1, Math.round((4200 - riseDuration) / 500));
  balloon.addEventListener("click", () => {
    if (!gameActive) {
      return;
    }
    score += popScore;
    updateHud();
    balloon.remove();
  });

  gameArea.appendChild(balloon);

  const start = performance.now();
  function animate(now) {
    if (!gameActive || !gameArea.contains(balloon)) {
      return;
    }

    const elapsed = now - start;
    const progress = elapsed / riseDuration;
    if (progress >= 1) {
      balloonEscaped(balloon);
      return;
    }

    const travelDistance = areaRect.height + size + 40;
    const y = progress * travelDistance;
    balloon.style.transform = `translateY(-${y}px)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

function startGame() {
  clearInterval(spawnIntervalId);
  clearInterval(timerIntervalId);
  clearBalloons();

  score = 0;
  timeLeft = GAME_DURATION;
  lives = STARTING_LIVES;
  gameActive = true;
  updateHud();
  setMessage("Oyun başladı", "Balonları kaçırmadan tıkla ve puan topla.");

  spawnIntervalId = window.setInterval(spawnBalloon, SPAWN_INTERVAL_MS);
  timerIntervalId = window.setInterval(() => {
    if (!gameActive) {
      return;
    }

    timeLeft -= 1;
    updateHud();
    if (timeLeft <= 0) {
      stopGame(`Süre doldu. Skorun: ${score}`);
    }
  }, 1000);
}

restartButton.addEventListener("click", startGame);
updateHud();

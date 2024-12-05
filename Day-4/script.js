let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");

// Update Timer Display
function updateTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

// Countdown Logic
function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTime();
  } else {
    clearInterval(timer);
    isRunning = false;
    message.textContent = "Time's Up! Take a Break.";
  }
}

// Start Timer
startButton.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(countdown, 1000);
    isRunning = true;
    message.textContent = "Time to Focus!";
  }
});

// Pause Timer
pauseButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  message.textContent = "Paused";
});

// Reset Timer
resetButton.addEventListener("click", () => {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateTime();
  isRunning = false;
  message.textContent = "Time to Focus!";
});

// Initialize Timer Display
updateTime();
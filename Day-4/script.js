let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");


function updateTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

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

startButton.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(countdown, 1000);
    isRunning = true;
    message.textContent = "Time to Focus!";
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  message.textContent = "Paused";
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateTime();
  isRunning = false;
  message.textContent = "Time to Focus!";
});

updateTime();
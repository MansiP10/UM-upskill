function handleRating(rating, button) {
const emoji = button.querySelector('.emoji');
emoji.classList.add('fly-up');
triggerHeartEmoji();
setTimeout(() => {
emoji.classList.remove('fly-up');
}, 500);


document.getElementById('feedback-form').classList.remove('hidden');
}

function submitFeedback() {
document.getElementById('feedback-form').classList.add('hidden');
document.getElementById('rate-experience').classList.add('hidden');
document.getElementById('thank-you').classList.remove('hidden');
}

function resetFeedback() {
document.getElementById('thank-you').classList.add('hidden');
document.getElementById('rate-experience').classList.remove('hidden');
document.getElementById('feedback').value = "";
document.getElementById('feedback-form').classList.add('hidden');
}

const defaults = {
    spread: 10,
    ticks: 10,
    gravity: 0,
    decay: 0.9,
    startVelocity: 1,
};

function triggerHeartEmoji() {
    confetti({
    ...defaults,
    particleCount: 10,
    scalar: 1,
    origin: { y: 0.1, x:0.6 },
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["❤️"],
      },
    },
    });
}
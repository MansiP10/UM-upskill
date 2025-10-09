const circleContainer = document.querySelector('.rotating-circle');
const squareContainer = document.querySelector('.rotating-square');

for (let i = 0; i < 20; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.animationDelay = `${i * 0.2}s`;
  circle.style.transform = `rotate(${i * 15}deg)`;
  circleContainer.appendChild(circle);
}

for (let i = 0; i < 40; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  const rotation = i * 36;
  const scale = 1 - i * 0.08;
  square.style.transform = `rotate(${rotation}deg) scale(${scale})`;
  square.style.animationDelay = `${i * 0.1}s`;
  squareContainer.appendChild(square);
}

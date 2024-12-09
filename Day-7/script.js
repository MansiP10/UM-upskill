const gradientType = document.getElementById('gradient-type');
const color1 = document.getElementById('color1');
const color1Value = document.getElementById('color1-value');
const color2 = document.getElementById('color2');
const color2Value = document.getElementById('color2-value');
const direction = document.getElementById('direction');
const directionValue = document.getElementById('direction-value');
const speed = document.getElementById('speed');
const preview = document.getElementById('gradient-preview');
const cssCode = document.getElementById('css-code');
const generateBtn = document.getElementById('generate-btn');

let currentGradient = ''; // Variable to store the current gradient CSS.

const updateGradient = () => {
  const type = gradientType.value;
  const colorStart = color1.value;
  const colorEnd = color2.value;
  const angle = direction.value;
  const animationSpeed = speed.value;

  const gradient =
    type === 'linear'
      ? `linear-gradient(${angle}deg, ${colorStart}, ${colorEnd})`
      : `radial-gradient(circle, ${colorStart}, ${colorEnd})`;

  currentGradient = `
    background: ${gradient};
    animation: gradient-animation ${animationSpeed}s infinite alternate;
  `;

  preview.style.background = gradient;
  preview.style.animation = `gradient-animation ${animationSpeed}s infinite alternate`;

  directionValue.textContent = `${angle}°`;
  color1Value.textContent = colorStart;
  color2Value.textContent = colorEnd;
};

// Event listeners for real-time gradient preview
gradientType.addEventListener('change', updateGradient);
color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);
direction.addEventListener('input', updateGradient);

// Event listener to show generated CSS on button click
generateBtn.addEventListener('click', () => {
  cssCode.value = currentGradient; // Display the generated CSS only on button click
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes gradient-animation {
  0% { filter: brightness(100%); }
  100% { filter: brightness(110%); }
}
`;
document.head.appendChild(style);

// Initialize the gradient preview
updateGradient();

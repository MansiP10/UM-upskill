const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');

passwordInput.addEventListener('input', () => {
    const passwordStrength = getPasswordStrength(passwordInput.value);
    updateStrengthMeter(passwordStrength);
});

function getPasswordStrength(password) {
    let strength = 0;

    if (password.length > 7) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    return strength;
}

function updateStrengthMeter(strength) {
    const width = (strength / 5) * 100;
    strengthMeter.style.width = `${width}%`;

    if (width <= 25) {
        strengthMeter.style.backgroundColor = 'red';
    } else if (width <= 50) {
        strengthMeter.style.backgroundColor = 'amber';
    } else {
        strengthMeter.style.backgroundColor = 'green';
    }
}
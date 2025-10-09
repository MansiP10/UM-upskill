const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('change', () => {
  if (togglePassword.checked) {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
});

const signupButton = document.getElementById('signupButton');
const signupForm = document.getElementById('signupForm');

signupButton.addEventListener('click', () => {
  alert('Signup successful!');
  signupForm.reset();
});
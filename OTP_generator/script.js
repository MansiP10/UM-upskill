let generatedOtp;
let timer;
let countdown = 30;
let timerInterval;

document.getElementById('generateOtpBtn').addEventListener('click', function () {
  generatedOtp = Math.floor(100000 + Math.random() * 900000);
  document.getElementById('otpDisplay').classList.remove('hidden');
  document.getElementById('otpValue').textContent = generatedOtp;
  document.getElementById('message').textContent = '';
  document.getElementById('otpInput').value = '';

  countdown = 30;
  document.getElementById('timerDisplay').classList.remove('hidden');
  document.getElementById('timer').textContent = countdown;
  document.getElementById('generateOtpBtn').disabled = true;
  startTimer();

  setTimeout(() => {
    document.getElementById('generateOtpBtn').disabled = false;
    document.getElementById('timerDisplay').classList.add('hidden');
  }, 30000);
});

document.getElementById('verifyOtpBtn').addEventListener('click', function () {
  const enteredOtp = document.getElementById('otpInput').value;
  if (enteredOtp == generatedOtp) {
    clearInterval(timerInterval);
    document.getElementById('message').textContent = 'OTP Verified Successfully!';
    document.getElementById('message').className = 'success';
  } else {
    document.getElementById('message').textContent = 'Incorrect OTP, Please try again.';
    document.getElementById('message').className = 'error';
  }
});

function startTimer() {
  timerInterval = setInterval(function () {
    countdown--;
    document.getElementById('timer').textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timerInterval);
      document.getElementById('generateOtpBtn').disabled = false;
      document.getElementById('timerDisplay').classList.add('hidden');
    }
  }, 1000);
}
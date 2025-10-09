const eventKey = document.getElementById('eventKey');
const eventKeyCode = document.getElementById('eventKeyCode');
const eventCode = document.getElementById('eventCode');

document.addEventListener('keydown', (event) => {
  document.querySelector('.container').classList.remove('hidden');
  document.querySelector('.button').classList.add('hidden');
  eventKey.innerHTML = event.key;
  eventKeyCode.innerHTML = event.keyCode;
  eventCode.innerHTML = event.code;
});
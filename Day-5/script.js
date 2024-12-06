const emojisList = [
    { emojis: ["🍎", "🍏"], answer: "Apple" },
    { emojis: ["🦄", "✨"], answer: "Unicorn" },
    { emojis: ["🐶", "🏠"], answer: "Dog House" },
    { emojis: ["🎸", "🎤"], answer: "Rock Band" },
    { emojis: ["🍕", "🍔"], answer: "Fast Food" }
  ];
  
  let currentScore = 0;
  let currentEmojiIndex = 0;
  
  const emojiDisplay = document.getElementById('emoji-display');
  const userGuess = document.getElementById('user-guess');
  const submitGuessButton = document.getElementById('submit-guess');
  const feedback = document.getElementById('feedback');
  const scoreDisplay = document.getElementById('score');
  
  function loadEmojis() {
    const emojis = emojisList[currentEmojiIndex];
    emojiDisplay.textContent = emojis.emojis.join(' ');
    feedback.textContent = '';
    userGuess.value = '';
  }
  
  function checkGuess() {
    const guess = userGuess.value.trim().toLowerCase();
    const correctAnswer = emojisList[currentEmojiIndex].answer.toLowerCase();
    
    if (guess === correctAnswer) {
      currentScore++;
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
      scoreDisplay.textContent = currentScore;
      
      setTimeout(() => {
        currentEmojiIndex = (currentEmojiIndex + 1) % emojisList.length;
        loadEmojis();
      }, 1000);
    } else {
      feedback.textContent = "Oh Incorrect! Try again.";
      feedback.style.color = "red";
    }
  }
  
  submitGuessButton.addEventListener('click', checkGuess);
  
  loadEmojis();
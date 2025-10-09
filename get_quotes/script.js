const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

function typeWriter(text, element, delay = 50) {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, delay);
  });
}

function removeTypewriter(element, delay = 30) {
  return new Promise((resolve) => {
    const text = element.textContent;
    let index = text.length - 1;
    const interval = setInterval(() => {
      if (index >= 0) {
        element.textContent = element.textContent.slice(0, index);
        index--;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, delay);
  });
}

async function fetchQuote() {
  try {
    const response = await fetch("https://quotes-api-chi.vercel.app/quotes");
    const quotes = await response.json();
    await removeTypewriter(quoteAuthor);
    await removeTypewriter(quoteText);

    await typeWriter(quotes.response.quote, quoteText);
    await typeWriter(`- ${quotes.response.author}`, quoteAuthor);
  } catch (error) {
    console.error("Error fetching the quote:", error);
    quoteText.textContent = "Failed to fetch quote. Please try again.";
    quoteAuthor.textContent = "";
  }
}

newQuoteBtn.addEventListener("click", fetchQuote);
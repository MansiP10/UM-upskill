document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) {
    alert("Please enter a book title!");
    return;
  }

  getBooks(query);
});

async function getBooks(query) {
  const apiUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    query
  )}`;
//   console.log(apiUrl);
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    if (data.docs.length === 0) {
      resultsDiv.innerHTML = "<p>No results found!</p>";
      return;
    }

    resultsDiv.innerHTML = "";
    data.docs.slice(0, 10).forEach((book) => {
      const coverId = book.cover_i;
      const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
        : "";
      const title = book.title;
      const author = book.author_name
        ? book.author_name.join(", ")
        : "Unknown Author";

      const bookHtml = `
                <div class="result-item">
                    <img src="${coverUrl}" alt="${title}">
                    <h3>${title}</h3>
                    <p>${author}</p>
                </div>
            `;

      resultsDiv.innerHTML += bookHtml;
    });
  } catch (error) {
    resultsDiv.innerHTML =
      "<p>An error occurred while fetching data. Please try again later.</p>";
    console.error(error);
  }
}

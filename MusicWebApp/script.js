const API_URL = "https://itunes.apple.com/search?term=${term}";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const musicResults = document.getElementById("musicResults");
const musicPlayer = document.getElementById("musicPlayer");
const trackInfo = document.getElementById("trackInfo");
const audioPlayer = document.getElementById("audioPlayer");
const closeButton = document.getElementById("closeButton");

searchButton.addEventListener("click", async () => {
    const term = searchInput.value.trim();
    if (term) {
      const musicItems = await fetchMusic(term);
      getMusic(musicItems);
    }else{
      alert("Please enter a search query");
    }
  });

async function fetchMusic(term) {
    const response = await fetch(API_URL.replace("${term}", encodeURIComponent(term)));
    const data = await response.json();
    
    return data.results;
}

function getMusic(items) {
  musicResults.innerHTML = "";
  items.forEach(item => {
    const musicItem = document.createElement("div");
    musicItem.classList.add("music-item");

    const albumArt = document.createElement("img");
    albumArt.src = item.artworkUrl100;
    albumArt.alt = item.trackName;
    albumArt.addEventListener("click", () => playMusic(item));

    const trackName = document.createElement("p");
    trackName.textContent = item.trackName;

    musicItem.appendChild(albumArt);
    musicItem.appendChild(trackName);
    musicResults.appendChild(musicItem);
  });
}

function playMusic(item) {
  trackInfo.textContent = `${item.trackName} by ${item.artistName}`;
  audioPlayer.src = item.previewUrl;
  audioPlayer.play();
  musicPlayer.classList.remove("hidden");
}

closeButton.addEventListener("click", () => {
  audioPlayer.pause();
  musicPlayer.classList.add("hidden");
});
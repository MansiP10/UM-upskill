const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu-icon');
const musicPlayer = document.getElementById('music-player');
const playlist = document.getElementById('playlist');
const trackList = document.getElementById('track-list');
const trackItems = document.querySelectorAll('.track-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isPlaying = false;
let currentTrackIndex = 0;
let audio = new Audio('track1.mp3');

const tracks = [
    { title: 'Ek Ajnabee Haseena Se', artist: 'Kishore Kumar', file: 'track1.mp3' },
    { title: 'Pal Pal Dil Ke Pass', artist: 'Kishore Kumar', file: 'track2.mp3' },
    { title: 'Mere Mehboob Qayamat Hogi', artist: 'Kishore Kumar', file: 'track3.mp3' },
    { title: 'Tum jo pakad lo hath mera', artist: 'Kishore Kumar', file: 'track4.mp3' },
    { title: 'Agar Tum Saath Ho', artist: 'Asha Bhosle, Mohammad Rafi', file: 'track5.mp3' },
    { title: 'Cham Cham', artist: 'Kishore Kumar', file: 'track6.mp3' },
    { title: 'Kaise Mujhe', artist: 'Asha Bhosle, Mohammad Rafi', file: 'track7.mp3' }
];

function loadTrack(index) {
    const track = tracks[index];
    document.getElementById('track-title').innerText = track.title;
    document.getElementById('artist-name').innerText = track.artist;
    audio.src = track.file;
}

function playCurrentTrack() {
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

menuIcon.addEventListener('click', () => {
    musicPlayer.classList.remove('active');
    playlist.classList.add('active');
});

closeMenuIcon.addEventListener('click', () => {
    playlist.classList.remove('active');
    musicPlayer.classList.add('active');
});

trackItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playlist.classList.remove('active');
        musicPlayer.classList.add('active');
    });
});

prevBtn.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
    } else {
        currentTrackIndex = tracks.length - 1; // Loop to the last track
    }
    playCurrentTrack();
});

nextBtn.addEventListener('click', () => {
    if (currentTrackIndex < tracks.length - 1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0; // Loop back to the first track
    }
    playCurrentTrack();
});

loadTrack(currentTrackIndex);
musicPlayer.classList.add('active');

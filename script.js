const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'album-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto',
  },
  {
    name: 'album-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto',
  },
  {
    name: 'album-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (remix)',
    artist: 'Metric/Jacinto',
  },
]


// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause')
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play')
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// PreviousSong
function prevSong() {
    songIndex--;
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong()
  }

// Next Song
function nextSong() {
  songIndex++;
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong()
}

// On load - select first song
loadSong(songs[songIndex]);

// Event Listeners for Previous and Next buttons
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

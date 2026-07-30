// ── iPod Now-Serving widget ──
const tracks = [
  "Snoop Dogg Stuffed Cookie",
  "Tyler the Creator Tiramisu",
  "DaBaby Biscoff Cupcake",
  "Dripped-Up Donut Bites",
  "Tupac Taco Pancakes",
  "🕷 Spider Drink"
];

let currentTrack = 0;
let playing = true;
let progress = 30;
let timer;

function updateDisplay() {
  const el = document.getElementById('trackName');
  if (el) el.textContent = tracks[currentTrack];
}

function startProgress() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (!playing) return;
    progress = (progress + 0.5) % 100;
    const bar = document.getElementById('ipodBar');
    if (bar) bar.style.width = progress + '%';
    const t = document.getElementById('timeRight');
    const secs = Math.floor((100 - progress) * 0.3);
    if (t) t.textContent = `0:${String(secs).padStart(2,'0')}`;
  }, 300);
}

function togglePlay() {
  playing = !playing;
  const btn = document.getElementById('playBtn');
  if (btn) btn.textContent = playing ? '⏸' : '▶';
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  progress = 0;
  updateDisplay();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  progress = 0;
  updateDisplay();
}

// Init
updateDisplay();
startProgress();

// ── Tape double content for seamless loop ──
document.querySelectorAll('.tape-inner').forEach(el => {
  el.innerHTML = el.innerHTML + el.innerHTML;
});

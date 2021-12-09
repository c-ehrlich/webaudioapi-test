// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();
audioContext.crossOrigin = "anonymous";

// get the audio element
const audioElement = document.querySelector('#audio1');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

// connect our audo graph from the source to the destination
track.connect(audioContext.destination);

// get the button working
const playButton = document.querySelector('#playpause');

console.log(playButton);

// add play and pause functionality
playButton.addEventListener('click', function() {
  // check if context is in suspended state (autoplay policy);
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    audioElement.play();
    this.dataset.playing = 'true';
  } else if (this.dataset.playing === 'true') {
    audioElement.pause();
    this.dataset.playing = 'false';
  }
}, false);

// take care of what happens when the track finishes playing
audioElement.addEventListener('ended', () => {
  playButton.dataset.playing = 'false';
})
const whiteNoise = new Tone.Noise('white');

const wFilter = new Tone.AutoFilter({
  frequency: '5s',
  min: 1,
  max: 10000
}).connect(Tone.Master);

whiteNoise.connect(wFilter);

wFilter.start();

let wPlaying = false;
document.querySelector('#white').addEventListener('click', () => {
  if (!wPlaying) {
    whiteNoise.start();
    wPlaying = true;
    console.log('white on');
  } else {
    whiteNoise.stop();
    wPlaying = false;
    console.log('white off');
  }
});

const brownNoise = new Tone.Noise('brown');

const bFilter = new Tone.AutoFilter({
  frequency: '1s',
  min: 1000,
  max: 100000
}).connect(Tone.Master);

brownNoise.connect(bFilter);

bFilter.start();

let bPlaying = false;

document.querySelector('#brown').addEventListener('click', () => {
  if (!bPlaying) {
    brownNoise.start();
    bPlaying = true;
    console.log('brown on');
  } else {
    brownNoise.stop();
    bPlaying = false;
    console.log('brown off');
  }
});

const pinkNoise = new Tone.Noise('pink');

const pFilter = new Tone.AutoFilter({
  frequency: '10s',
  min: 800,
  max: 15000
}).connect(Tone.Master);

pinkNoise.connect(pFilter);

pFilter.start();

let playing = false;

document.querySelector('#pink').addEventListener('click', () => {
  if (!playing) {
    pinkNoise.start();
    playing = true;
    console.log('pink on');
  } else {
    pinkNoise.stop();
    playing = false;
    console.log('pink off');
  }
});

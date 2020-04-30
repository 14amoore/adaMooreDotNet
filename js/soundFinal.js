// uncomment below before deployment
window.onload = async () => {
  window.alert('Click here to initialize program.');
  await Tone.start();
  console.log('READY!');
};

function wakeUpButton() {
  document.querySelector('#sound').disabled = false;
}

function randomValue() {
  const x = Math.random();
  return x;
}

const osc = new Tone.MonoSynth({
  oscillator: {
    type: 'sine'
  },
  filter: {
    type: 'lowpass',
    frequency: 60,
    rolloff: -24
  },
  envelope: {
    attack: 0.1
  }
}).toMaster();

const osc2 = new Tone.MonoSynth({
  oscillator: {
    type: 'sine'
  },
  filter: {
    type: 'lowpass',
    frequency: 100,
    rolloff: -48,
    Q: 5
  },
  envelope: {
    attack: 1
  }
}).toMaster();

const osc3 = new Tone.MonoSynth({
  oscillator: {
    type: 'sine'
  },
  filter: {
    type: 'lowpass',
    frequency: 60,
    rolloff: -24,
    Q: 10
  },
  envelope: {
    attack: 1
  }
}).toMaster();

const osc4 = new Tone.MonoSynth({
  oscillator: {
    type: 'sine'
  },
  filter: {
    type: 'lowpass',
    frequency: 60,
    rolloff: -24,
    Q: 5
  },
  envelope: {
    attack: 1
  }
}).toMaster();

const noise = new Tone.NoiseSynth().toMaster();
noise.volume.value = -20;

const poly = new Tone.PolySynth(4, Tone.MonoSynth, {
  oscillator: {
    type: 'sine'
  },
  envelope: {
    attack: 0.1
  }
}).toMaster();

function getRandomInt(max) {
  return Math.ceil(Math.random() * Math.floor(max));
}

async function getIpData() {
  const response = await fetch('https://json.geoiplookup.io/');
  const data = await response.json();
  // console.log(data);
  const state = data.region;
  const dispIp = data.ip;
  const zip = parseInt(data.postal_code, 10);
  // const playTime = zip / 100;
  // const playTime = 20;
  let playTime;
  if (zip / 100 > 150) {
    playTime = 150;
  } else {
    playTime = zip / 100;
  }

  document.querySelector(
    '#state'
  ).innerHTML = `Your IP address is ${dispIp}. You are in ${state} State and your zipcode is ${zip}. This piece will play for approximately ${playTime} seconds`;
  const ip = data.ip.split('.');
  const ipArray = [];
  for (let i = 0; i < ip.length; i += 1) {
    const numIp = parseInt(ip[i]);
    ipArray.push(numIp);
  }
  console.log(ipArray, playTime);
  // noise.envelope.attack = ipArray[1] / 100;
  // noise.envelope.decay = ipArray[1] / 90;
  const now = Tone.now();

  // const noiseType = randomValue();
  function randomNoise() {
    if (randomValue() <= 1 / 3) {
      noise.type = 'white';
      console.log('white');
    } else if (randomValue() > 0.34 && randomValue() <= 2 / 3) {
      noise.type = 'pink';
      console.log('pink');
    } else {
      noise.type = 'brown';
      console.log('brown');
    }
  }

  const oscTrigRel = now + playTime * 0.25;
  const prelimFreq = ipArray[0] / getRandomInt(5);
  // const prelimFreq = 39;
  let oscFreq;
  if (prelimFreq <= 40) {
    randomNoise();
    noise.envelope.attack = getRandomInt(oscTrigRel / 2);
    noise.envelope.sustain = Math.random();
    noise.triggerAttack().triggerRelease(oscTrigRel);
  } else {
    oscFreq = prelimFreq;
    osc.triggerAttack(oscFreq).triggerRelease(oscTrigRel);
  }

  // osc2.filter.frequency.value = oscFreq;

  // console.log(osc.envelope.attack, osc2.envelope.attack);

  const osc2TrigRel = now + playTime * 0.5;
  const prelimFreq2 = ipArray[1] / getRandomInt(2);
  let osc2Freq;
  if (prelimFreq2 <= 40) {
    randomNoise();
    noise.envelope.attack = getRandomInt(osc2TrigRel / 2);
    noise.envelope.sustain = Math.random();
    noise.triggerAttack(oscTrigRel).triggerRelease(osc2TrigRel);
  } else {
    osc2Freq = prelimFreq2;
    osc2.envelope.attack = getRandomInt(2);
    osc2.triggerAttack(osc2Freq, oscTrigRel).triggerRelease(osc2TrigRel);
  }

  const osc3TrigRel = now + playTime * 0.75;
  const prelimFreq3 = ipArray[2] / getRandomInt(4);
  let osc3Freq;
  if (prelimFreq3 <= 40) {
    randomNoise();
    noise.envelope.attack = getRandomInt(osc3TrigRel / 2);
    noise.envelope.sustain = Math.random();
    noise.triggerAttack(oscTrigRel).triggerRelease(now + playTime);
  } else {
    osc3Freq = prelimFreq3;
    osc3.triggerAttack(osc3Freq, osc2TrigRel).triggerRelease(osc3TrigRel);
  }

  const osc4TrigRel = now + playTime;
  const prelimFreq4 = ipArray[3];
  let osc4Freq;
  if (prelimFreq4 <= 40) {
    randomNoise();
    noise.envelope.attack = getRandomInt(osc4TrigRel / 2);
    noise.envelope.sustain = Math.random();
    noise.triggerAttack(osc2TrigRel).triggerRelease(osc4TrigRel);
  } else if (prelimFreq4 > 40 && prelimFreq4 <= 200) {
    osc4Freq = prelimFreq4;
    osc4.volume.value = -10;
    osc4.triggerAttack(osc4Freq, osc3TrigRel).triggerRelease(osc4TrigRel);
  } else {
    osc4.volume.value = -10;
    osc4Freq = Math.random() * 200;
    osc4.triggerAttack(osc4Freq, osc3TrigRel).triggerRelease(osc4TrigRel);
  }

  // osc.triggerAttack(oscFreq, osc4TrigRel).triggerRelease(now + playTime);

  document.querySelector('#sound').disabled = true;

  const rest = playTime;

  const realRest = rest * 1000;

  // console.log(rest, realRest);
  console.log(oscFreq, osc2Freq, osc3Freq, osc4Freq);

  setTimeout(wakeUpButton, realRest);

  return realRest;
}

function polyTry() {
  // poly.triggerAttack(60).triggerRelease(60, '+3');
  // poly.triggerAttack(100, '+2').triggerRelease(100, '+5');
  osc.triggerAttack(60).triggerRelease('+2');
  osc2.triggerAttack(100, '+2').triggerRelease('+4');
  osc3.triggerAttack(150, '+4').triggerRelease('+8');
  osc4.triggerAttack(180, '+8').triggerRelease('+10');
}

document.querySelector('#sound').addEventListener('click', getIpData);

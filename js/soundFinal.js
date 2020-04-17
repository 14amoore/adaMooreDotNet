// uncomment below before deployment
window.onload = async () => {
  window.alert('Click here to initialize program.');
  await Tone.start();
  console.log('READY!');
};

function wakeUpButton() {
  document.querySelector('#sound').disabled = false;
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
  console.log(data);
  const state = data.region;
  document.querySelector(
    '#state'
  ).innerHTML = `You are located in ${state} State.`;
  const zip = parseInt(data.postal_code, 10);
  // const playTime = zip / 100;
  const playTime = 20;
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

  const oscFreq = ipArray[0] / 5;
  osc.triggerAttack(oscFreq).triggerRelease(now + playTime);

  osc2.envelope.attack = getRandomInt(2);
  osc2.filter.frequency.value = oscFreq;

  console.log(osc.envelope.attack, osc2.envelope.attack);

  const osc2Freq = ipArray[1] / 2;
  osc2.triggerAttack(osc2Freq, now + 2).triggerRelease(now + (playTime - 50));

  const osc3Freq = ipArray[2] / 4;
  osc3.triggerAttack(osc3Freq, now + 3).triggerRelease(now + (playTime - 80));

  const osc4Freq = ipArray[3];
  osc4
    .triggerAttack(osc4Freq, now + playTime / 3)
    .triggerRelease(now + playTime * (2 / 3));

  document.querySelector('#sound').disabled = true;

  const rest = now + playTime;

  const realRest = rest * 1000;

  console.log(rest, realRest);

  setTimeout(wakeUpButton, realRest);

  return realRest;
}

function polyTry() {
  // poly.triggerAttack(60).triggerRelease(60, '+3');
  // poly.triggerAttack(100, '+2').triggerRelease(100, '+5');
  osc.triggerAttack(60).triggerRelease('+6');
  osc2.triggerAttack(100, '+2').triggerRelease('+6');
  osc3.triggerAttack(150, '+3').triggerRelease('+6');
  osc4.triggerAttack(180, '+4').triggerRelease('+6');
}

document.querySelector('#sound').addEventListener('click', getIpData);

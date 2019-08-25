const synth = new Tone.Synth().toMaster();
window.onload = function hiThere() {
  synth.triggerAttackRelease('C4', '128N');
};

document.querySelector('#play').addEventListener('click', () => Tone.start());

function boop(event) {
  if (event.key === 'a') {
    synth.triggerAttackRelease('D4', '128N');
  } else if (event.key === 'b') {
    synth.triggerAttackRelease('E4', '128N');
  } else if (event.key === 's') {
    synth.triggerAttackRelease('F4', '128N');
  } else if (event.key === 'd') {
    synth.triggerAttackRelease('G4', '128N');
  } else if (event.key === 'f') {
    synth.triggerAttackRelease('A4', '128N');
  } else if (event.key === 'g') {
    synth.triggerAttackRelease('B4', '128N');
  } else if (event.key === 'h') {
    synth.triggerAttackRelease('C5', '128N');
  } else if (event.key === 'j') {
    synth.triggerAttackRelease('D5', '128N');
  } else if (event.key === 'k') {
    synth.triggerAttackRelease('E5', '128N');
  } else if (event.key === 'l') {
    synth.triggerAttackRelease('F5', '128N');
  } else if (event.key === 'q') {
    synth.triggerAttackRelease('G5', '128N');
  } else if (event.key === 'w') {
    synth.triggerAttackRelease('A5', '128N');
  } else if (event.key === 'e') {
    synth.triggerAttackRelease('B5', '128N');
  } else if (event.key === 'r') {
    synth.triggerAttackRelease('C6', '128N');
  } else if (event.key === 't') {
    synth.triggerAttackRelease('D6', '128N');
  } else if (event.key === 'y') {
    synth.triggerAttackRelease('E6', '128N');
  } else if (event.key === 'u') {
    synth.triggerAttackRelease('F6', '128N');
  } else if (event.key === 'i') {
    synth.triggerAttackRelease('G6', '128N');
  } else if (event.key === 'o') {
    synth.triggerAttackRelease('A6', '128N');
  } else if (event.key === 'p') {
    synth.triggerAttackRelease('B6', '128N');
  } else if (event.key === 'z') {
    synth.triggerAttackRelease('C3', '128N');
  } else if (event.key === 'x') {
    synth.triggerAttackRelease('D3', '128N');
  } else if (event.key === 'c') {
    synth.triggerAttackRelease('E3', '128N');
  } else if (event.key === 'v') {
    synth.triggerAttackRelease('F3', '128N');
  } else if (event.key === 'b') {
    synth.triggerAttackRelease('G3', '128N');
  } else if (event.key === 'n') {
    synth.triggerAttackRelease('A3', '128N');
  } else if (event.key === 'm') {
    synth.triggerAttackRelease('B3', '128N');
  } else {
    synth.triggerAttackRelease('C1', '128N');
  }
}

window.addEventListener('keyup', boop);

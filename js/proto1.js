let synth = new Tone.Synth().toMaster();
window.onload = function firstTone() {
  synth.triggerAttackRelease('C4', '8n');
};

document.querySelector('#play').addEventListener('click', () => Tone.start());

document.querySelector('#c').onmouseover = function() {
  synth.triggerAttackRelease('C3', '8n');
};

document.querySelector('#d').onmouseover = function() {
  synth.triggerAttackRelease('D3', '8n');
};

document.querySelector('#e').onmouseover = function() {
  synth.triggerAttackRelease('E3', '8n');
};

document.querySelector('#f').onmouseover = function() {
  synth.triggerAttackRelease('F3', '8n');
};

document.querySelector('#g').onmouseover = function() {
  synth.triggerAttackRelease('G3', '8n');
};

document.querySelector('#a').onmouseover = function() {
  synth.triggerAttackRelease('A3', '8n');
};

document.querySelector('#b').onmouseover = function() {
  synth.triggerAttackRelease('B3', '8n');
};

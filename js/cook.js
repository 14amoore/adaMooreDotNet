document.cookie = 'delicious_cookie=confetti';
document.cookie = 'great_cookie=moose';

function logCookies() {
  console.log(document.cookie);
}

function dispCookies() {
  let cooks = document.cookie;
  let newDiv = document.createElement('p');
  newDiv.innerHTML = cooks;
  document.body.appendChild(newDiv);
}

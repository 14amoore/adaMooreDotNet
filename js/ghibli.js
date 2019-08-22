/*
    I wrote this function so you don't have to write out a lot of code to call an API.
    Using the following function, you just give it:
    - what URL to hit
    - what to do when the result is received from the API
*/
function getJSON(path, callback) {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', path, true);
    req.setRequestHeader('Accept', 'application/json');
    req.onload = function () {
        callback(req.response);
    };
    req.send();
}
/*
   You can pass an `inline` `anonymous` function as a callback function to `getJSON`
   Like this.
   - anonymous: it doesn't have a name. (see `getJSON`? that is a named function) - more about anonymous functions: http://helephant.com/2008/08/23/javascript-anonymous-functions/
*/
getJSON('https://ghibliapi.herokuapp.com/films/', function (info) {
    console.log('I am an inline, anonymous function and I got info: ', info);
});
// 1. call studio Ghibli API
// 2. print a random title in HTML
function printGhibli(ghibliData) {
    var ghibliEl = document.querySelector('.ghibli');
    var ghibliPlot = document.querySelector('.plot');
    var rando = Math.floor(Math.random() * 20);
    ghibliEl.innerText = ghibliData[rando].title;
    ghibliPlot.innerText = ghibliData[rando].description;
}
function loadTotoro(event) {
    // prevent default behavior of this event.
    event.preventDefault();
    getJSON('https://ghibliapi.herokuapp.com/films/', printGhibli);
}
// grab a reference to the <button> element in html
var loadTotoroBtn = document.querySelector('.totoro');
// call `loadTotoro` whenever `<button>` is clicked
loadTotoroBtn.addEventListener('click', loadTotoro);

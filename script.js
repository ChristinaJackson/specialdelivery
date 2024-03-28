console.log('ello');
let root = document.getElementById('root');

document.addEventListener('DOMContentLoaded', function() {
const sometext = document.createElement('p');
sometext.textContent = "This is from a github javascript file";
root.appendChild(sometext);
});

console.log('ello')

const sometext = document.createElement('p');
sometext.textContent = "This is from a JavaScript file";

const root = document.getElementById('root');

root.appendChild(sometext);
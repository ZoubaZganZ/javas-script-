'use strict';

// const myDivs = document.getElementsByTagName('div');
// console.log('myDivs', myDivs);

// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2', myDivs2);

// const myParagraphs = document.getElementsByClassName('secondary-paragraph');

// const myParagraphs2 = document.querySelectorAll('.secondary-paragraph');

// const myUniqueEl = document.getElementById('js-unique-el');

// const myUniqueEl2 = document.querySelector('#js-unique-el');

// const myParagraphsInDivs = document.querySelectorAll('div p');
// console.log('myParagraphsInDivs', myParagraphsInDivs);

// const spansPreceededByDivs = document.querySelector('div + span');
// console.log('spansPreceededByDivs', spansPreceededByDivs);

const firstP = document.querySelector('.first-p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP value', firstP.innerText);

const secondP = document.querySelector('.second-p');
secondP.innerHTML = '<span>Hello</span>';
console.log('secondP html', secondP.innerHTML);

const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');

myImg.setAttribute('alt', 'Random Image');

firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

myImg.className = 'my-class'; // myImg.className += 'another-class'
myImg.classList.add('my-class');
myImg.classList.remove('some-class');

const myBody = document.querySelector('body');
const newEl = document.createElement('p');
newEl.innerText = 'Hello';
newEl.style.color = 'Red';

// Dernier Enfant
myBody.appendChild(newEl);

const newEl2 = document.createElement('p');
newEl2.innerText = 'Hello';
newEl2.style.color = 'Yellow';

// Premier Enfant
myBody.prepend(newEl2);

myBody.removeChild(newEl2);
myBody.prepend(newEl);

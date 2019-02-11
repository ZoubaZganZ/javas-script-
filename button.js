'use strict';

const myBtn = document.querySelector('#js-btn');
myBtn.addEventListener('click', (event) => {
    console.log('Clicked', event);
});

let isClicked = false;
const myGrayBtn = document.querySelector('#js-gray-btn');
myGrayBtn.addEventListener('click', (event) => {
    if (isClicked) {
        myGrayBtn.style.backgroundColor = 'gray';
    } else {
    myGrayBtn.style.backgroundColor = 'green';
    }
    isClicked = !isClicked;
});

const hoveredBtn = document.querySelector('#js-hovered-btn');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
})
hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'initial';
})
window.addEventListener('contextmenu', (event) =>{
    console.log('Mouse right button is clicked');
})

const myForm = document.querySelector('#js-form');

const myInput = document.querySelector('#js-input');

myInput.addEventListener('keyup', (e) => {
    console.log('e', e);
    console.log('input value : ', myInput.value);
});

myForm.addEventListener('Submit', () => {
    event.preventDefault();
    alert(`Your input ${myInput.value}`);
});

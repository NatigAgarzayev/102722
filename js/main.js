const red = document.querySelector('.red');

red.addEventListener('mouseover', () => {
    red.style.backgroundColor = 'pink';
    red.style.border = '2px blue solid';
});

red.addEventListener('mouseout', () => {
    red.style.backgroundColor = 'yellow';
    red.style.border = '2px purple solid';
});
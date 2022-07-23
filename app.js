// DOM Manipulation

const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);

// Applying syles to multiple elements
const listItems = document.querySelectorAll('.list-items')

for(let i = 0; i < listItems.length; i++){
  listItems[i].style.color = 'purple';
}
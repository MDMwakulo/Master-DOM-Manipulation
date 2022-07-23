// DOM Manipulation

// 1) Styling Elements

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

// Applying syles to multiple elements
// const listItems = document.querySelectorAll('.list-items')

// for(let i = 0; i < listItems.length; i++){
//   listItems[i].style.color = 'purple';
// }

// 2) Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Element

ul.append(li)

// Modifying the text

li.innerText = 'Papa Johns';
li.setAttribute('id', 'main-heading')
li.removeAttribute('id')

// Getting Attributes

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'))
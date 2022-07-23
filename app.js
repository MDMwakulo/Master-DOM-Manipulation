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

// Modifying Attributes and Classes
li.classList.add('list-items');// This adds class of List-items to our li

console.log(li.classList.contains('list-items'));

// Removing elements
li.remove();
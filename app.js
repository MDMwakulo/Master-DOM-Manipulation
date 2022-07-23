// DOM Manipulation

const ul = document.querySelector('ul');
const li = document.createElement('li');

li.innerText = 'Papa Johns';
li.classList.add('list-items');
ul.append(li);
// DOM Manipulation

// Traversing the DOM

// Parent Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.querySelector('html');

// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// ul.childNodes[1].style.backgroundColor = 'red';
// ul.childNodes[1].style.color = 'white';

let ul = document.querySelector('ul');
console.log(ul.children)
console.log(ul.firstElementChild);// Here you get the exact first child elememt
console.log(ul.lastElementChild); // Here you get the exact last child elememt
// Sibling Node Traversal
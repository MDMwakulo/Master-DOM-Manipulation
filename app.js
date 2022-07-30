// DOM Manipulation

// Event Propagation

window.addEventListener('click', function() {
  console.log('Window');
}, false); // the true boolean value is to campture the event capturing

document.addEventListener('click', function() {
  console.log('Document');
}, false);

document.querySelector('.div2').addEventListener('click', function() {
  console.log('Div 2');
}, false); //one the first click of the button div2 will fire but on the second click div2 will not fire.

document.querySelector('.div1').addEventListener('click', function() {
  console.log('Div 1');
}, false);

document.querySelector('.button').addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target.innerText = 'Clicked');
}, false);

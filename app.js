// DOM Manipulation

// Event Listener

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
  alert('I also love JS.');
}

buttonTwo.addEventListener('click', alertBtn);

// Mouse-over Event
const boxThree = document.querySelector('.box-3');

function alertBtnThree() {
  boxThree.style.backgroundColor = 'red';
  boxThree.style.color = 'white';
}

boxThree.addEventListener('mouseover', alertBtnThree);
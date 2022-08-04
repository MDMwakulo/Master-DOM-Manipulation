// DOM Manipulation

// Event Delegation

document.querySelector('#sports').addEventListener('click', function(e) {
  const target = e.target;

  console.log(target.textContent + ' is clicked.');

  if(target.matches('li')) {
    target.style.backgroundColor = 'grey';
    target.style.color = 'white';
  } 
});
// Adding a new list item
const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.append(newSport);

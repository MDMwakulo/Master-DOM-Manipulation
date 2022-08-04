// Variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`
  },
  {
    quote:`"It does not matter how slowly you go as long as you do not stop."`,
    person:`Confucius`
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck"`,
    person: `Dalai Lama`
  },
  {
    quote: `"The journey of thousand miles begins with one step"`,
    person: `Lao Tzu`
  }
]

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);
  let check = undefined;
  
  if(random !== check){
    check = random;
    console.log(check)
    quote.innerText = quotes[check].quote;
    person.innerText = quotes[check].person;
  } else {
    random = Math.floor(Math.random() * quotes.length);
    check = random
    console.log(check);
    quote.innerText = quotes[check].quote;
    person.innerText = quotes[check].person;
  }

})
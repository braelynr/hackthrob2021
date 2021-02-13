
var i = 0;
var randomNote = "Welcome to Love Letter <3";
var notes = ['Smile! It\'s a beautiful day!',
'You\'re an amazing person!',
'Always remember how much you are loved',
'Everything is going to be okay. Don\'t let it get to you.',
'You are perfect in every possible way.',
'You are enough!',
'You got this!',
'You are beautiful!',
'Have a lovely day!',
'You are braver than you think.',
'You are worthy of love',
'I believe in you.'];

function getNextNote(){
  randomNote = notes[i];
  i++;
  if (i == 12)
  {
    i = 0;
  }
}

const random = document.querySelector('.btn');

random.addEventListener('click', function() {
  getNextNote();
  document.getElementById("note").innerHTML = randomNote;
});

// when the page first loads
//window.addEventListener('load', function(){
//});

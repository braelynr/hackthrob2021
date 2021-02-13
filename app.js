
var i = 0;
var randomNote = "Welcome to Love Letter <3";
var notes = ['Smile! It\'s a beautiful day!',
'You\'re an amazing person!'];

function getNextNote(){
  randomNote = notes[i];
  i++;
  if (i == 2)
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
window.addEventListener('load', function(){
});

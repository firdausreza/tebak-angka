/* 
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses 
- Notify player of guesses remaining
- Notify player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1)) + min,
    guessLeft = 3;

// UI Element
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIsubmit = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UIreloadBtn = document.querySelector('#reloadBtn'),
      UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Event listener
UIsubmit.addEventListener('click', function() {
  switch (guessLeft){
    case 1: 
      UImessage.textContent = `Game over, kamu kalah. Pencet tombol Restart untuk main lagi!`;
      UImessage.style.color = 'red';
      UIguessInput.disabled = true;
      break;
    default:
      if (UIguessInput.value === "") {
        UImessage.textContent = `Tolong masukkan angka yang valid`;
        UImessage.style.color = 'red';
      } else {
        if (parseInt(UIguessInput.value) === winningNum) {
          UImessage.textContent = `Yak betul! angkanya adalah ${winningNum}. Pencet tombol Restart untuk main lagi!`;
          UImessage.style.color = 'green';
          UIguessInput.disabled = true;
        } else {
          guessLeft -= 1;
          UImessage.textContent = `Salah!, kamu punya ${guessLeft} kesempatan tersisa`;
          UImessage.style.color = 'red';
        }
      }
      break;
  }
});

UIreloadBtn.addEventListener('click', function() {
  location.reload();
})


<<<<<<< HEAD
=======
const history = {};

function play() {
  let username = prompt("Enter your name.");
  history[username] = 0;
  const secretNum = Math.floor(Math.random() * 10) + 1;
  let numGuesses = 0;
  let guessArr = [];
  while (true) {
    let guessStr = prompt("Guess a number between 1-10!");
    let guessNum = Number(guessStr);
    guessArr.push(guessNum);
    numGuesses++;

    // If user presses the ESC key or "Cancel" in the prompt
    if (guessStr === null) {
      alert("Goodbye!");
      break;
    }

    // If the user inputs a character other than a number
    if (Number.isNaN(guessNum)) {
      alert("That's not a number!");
      break;
    }

    // Guess is too low
    if (guessNum < secretNum) {
      alert(`Sorry, ${username}, guess higher.`);
    }

    // Guess is too high
    else if (guessNum > secretNum) {
      alert(`Sorry ${username}, guess lower.`);
    }

    // Guess is correct
    else {
      // This is user's first time playing
      if (history[username] === 0) {
        alert(`That's correct, ${username}! It only took you ${numGuesses} guesses!`);
        history[username] = numGuesses;
      }
      // User has played before
      else {
        // User's last attempt was worse than this attempt
        if (numGuesses < history[username]) {
          alert(
            `That's correct, ${username}! And you beat your previous attempt by ${
              history[username] - numGuesses
            } fewer guesses!`
          );
          history[username] = numGuesses;
        }
        // User's last attempt was better than this attempt
        else if (numGuesses > history[username]) {
          alert(
            `That's correct, ${username}! You did better in your last game by ${
              numGuesses - history[username]
            } fewer guesses!`
          );
          history[username] = numGuesses;
        }
        // User's last attempt was same number of guesses as this attempt
        else if (numGuesses === history[username]) {
          alert(
            `That's correct, ${username}! You guessed correctly in the same number of guesses as last time!`
          );
          history[username] = numGuesses;
        }
      }
      if (confirm("Do you want to play again?")) {
        play();
      } else {
        break;
      }
    }
  }
}

play(); // This is your main function that runs when the page loads
>>>>>>> a30bbb1 (First commit - updated app.js)

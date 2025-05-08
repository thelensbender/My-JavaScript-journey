let computerMove;
let result;
const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
function updateScoreElement() {
  document.querySelector('.js-score-button').innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}
updateScoreElement();

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playerChoice('Rock')
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playerChoice('Paper')
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playerChoice('Scissors')
})

document.querySelector('.js-auto-play').addEventListener('click', () => {
  autoPlay();
})

function playerChoice(choice) {
  forComputer();
  if (choice === 'Rock') {
    if (computerMove === 'Rock') {
    result = 'Tie!';
    } else if (computerMove === 'Paper') {
      result = 'You lose!';
    } else if (computerMove === 'Scissors') {
      result = 'You win!';
    }
  } else if (choice === 'Paper') {
    if (computerMove === 'Rock') {
    result = 'You win!';
    } else if (computerMove === 'Paper') {
      result = 'Tie!';
    } else if (computerMove === 'Scissors') {
      result = 'You lose!';
    }
  } else if (choice === 'Scissors') {
    if (computerMove === 'Rock') {
    result = 'You lose!';
    } else if (computerMove === 'Paper') {
      result = 'You win!';
    } else if (computerMove === 'Scissors') {
      result = 'Tie!';
    }
  }
  
    if (result === 'You win!') {
      score.wins += 1;
    } else if (result === 'You lose!') {
      score.losses += 1;
    } else if (result === 'Tie!') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-result-comparison').innerHTML = `
You
<img src="/image/${choice}-emoji.png" class="move-icon">
<img src="/image/${computerMove}-emoji.png" class="move-icon">
Computer`;
}


let intervalId;
let isAutoPlay = false;
function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      let choice;
      let randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < (1/3)) {
        choice = 'Rock';
        } else if (randomNumber >= (1/3) && randomNumber < (2/3)) {
          choice = 'Paper';
        } else if (randomNumber >= (2/3) && randomNumber < 1) {
          choice = 'Scissors';
        }
    playerChoice(choice);
    }, 500);
    isAutoPlay = true;
    document.querySelector(".auto-play-button").innerHTML = 'Stop Auto Play';
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
    document.querySelector(".auto-play-button").innerHTML = 'Auto Play';
  }
}

function forComputer() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < (1/3)) {
  computerMove = 'Rock';
  } else if (randomNumber >= (1/3) && randomNumber < (2/3)) {
    computerMove = 'Paper';
  } else if (randomNumber >= (2/3) && randomNumber < 1) {
    computerMove = 'Scissors';
  }
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-result-comparison').innerHTML = '';
  localStorage.removeItem('score');
  updateScoreElement();
}
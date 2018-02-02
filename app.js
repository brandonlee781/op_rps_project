const rockBtn = document.querySelector('.rock-btn');
rockBtn.addEventListener('click', buttonClick);
const paperBtn = document.querySelector('.paper-btn');
paperBtn.addEventListener('click', buttonClick);
const scissorsBtn = document.querySelector('.scissors-btn');
scissorsBtn.addEventListener('click', buttonClick);

const playerScoreCount = document.querySelector('.player-score .score-number');
const computerScoreCount = document.querySelector('.computer-score .score-number');
const roundText = document.querySelector('.round-text');
let score = { player: 0, computer: 0 };

function buttonClick(e) {
  const playerChoice = this.getAttribute('data-choice');
  const computerChoice = computerPlay();
  const round = playRound(playerChoice, computerChoice);
  score = modifyScore(score, round);
  playerScoreCount.innerHTML = score.player;
  computerScoreCount.innerHTML = score.computer;

  if (round === 1) roundText.innerHTML = 'Player wins the round!';
  else if (round === 2) roundText.innerHTML = 'Computer wins the round!';
  else if (round === 3) roundText.innerHTML = 'Tied round!';
}


const randNum = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const computerPlay = () => {
  const opts = ['rock', 'paper', 'scissors'];
  return opts[randNum(0,2)] 
};

const modifyScore = (score, scoreResult) => {
  if (scoreResult === 1) {
    return {
      player: score.player + 1,
      computer: score.computer
    }
  } else if (scoreResult === 2) {
    return {
      player: score.player,
      computer: score.computer + 1
    }
  } else if (scoreResult === 3) {
    return score;
  }
};

const playRound = (player, computer) => {
  player = player.toLowerCase();
  switch(true) {
    case (player === 'rock'     && computer === 'scissors'):
    case (player === 'paper'    && computer === 'rock'):
    case (player === 'scissors' && computer === 'paper'):
      return 1;
    case (player === 'rock'     && computer === 'paper'):
    case (player === 'paper'    && computer === 'scissors'):
    case (player === 'scissors' && computer === 'rock'):
      return 2;
    case (player === computer):
      return 3;
    default:
      console.error('I have no idea what happened!');
      break;
  }
};

const game = () => {
  const score = { player: 0, computer: 0 };
  let i = 0;

  while (i < 5) {
    let playerChoice = prompt('Rock, paper or scissors?');
    const roundResult = playRound(playerChoice, computerPlay());
    if (roundResult === 1) score.player++;
    if (roundResult === 2) score.computer++;
    i++;
  }
  
  switch(true) {
    case (score.player > score.computer):
      console.log('Player wins! %s rounds to %s rounds.', score.player, score.computer);
      break;
    case (score.player < score.computer):
      console.log('Computer wins! %s rounds to %s rounds.', score.computer, score.player);
      break;
    case (score.player === score.computer):
      console.log('Tied game. %s rounds each.', score.player);
      break;
    default:
      console.error('Something seriously went wrong.');
  }
};
// game();
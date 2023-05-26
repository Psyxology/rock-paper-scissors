const rock = document.getElementById('rBtn');
const paper = document.getElementById('pBtn');
const scissors = document.getElementById('sBtn');


let win = 0,
  loss = 0,
  tie = 0;



rock.addEventListener('click', function() {
  playRound("rock")
});

paper.addEventListener('click', function() {
  playRound("paper")
});

scissors.addEventListener('click', function() {
  playRound("scissors")
});



function playRound(userChoice) {

  document.getElementById('message').innerHTML = "";
  computerChoice = getComputerChoice();
  if (userChoice == computerChoice) {
    tie++;
    document.getElementById('tie').innerHTML = tie;
    document.getElementById('message').innerHTML = "You chose " + userChoice + ", computer chose " + computerChoice + ", result is a tie";

  } else if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper") {
    win++;
    document.getElementById('win').innerHTML = win;
    document.getElementById('message').innerHTML = "You chose " + userChoice + ", computer chose " + computerChoice + ", you win";

  } else {
    loss++;
    document.getElementById('loss').innerHTML = loss;
    document.getElementById('message').innerHTML = "You chose " + userChoice + ", computer chose " + computerChoice + ", you lose";

    return gameOver();
  }

}

const choiceList = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choiceList.length);
  const randomChoice = choiceList[randomIndex];
  return randomChoice;

}

function gameOver() {
  if (win > 4 || loss > 4)

    return gameAlert();
}

function gameAlert() {
  alert("first to 5, you had " + win + " wins and computer had " + loss)
  return reset();
}



function reset() {
  win = 0
  loss = 0
  tie = 0
  document.getElementById('win').innerHTML = 0
  document.getElementById('loss').innerHTML = 0
  document.getElementById('tie').innerHTML = 0
  document.getElementById('message').innerHTML = "new game!";

}


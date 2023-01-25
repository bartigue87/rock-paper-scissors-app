const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const btn = document.querySelector(".btn");
const closeout = document.querySelector(".closeout");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const matchContainer = document.querySelector(".match-container");
const choicesContainer = document.querySelector(".choices-container");
const playerCrown = document.getElementById("player-crown");
const houseCrown = document.getElementById("house-crown");
const playerChoice = document.getElementById("player-choice");
const houseChoice = document.getElementById("house-choice");
const matchResult = document.getElementById("match-result");
const playerScore = document.getElementById("score");
const playAgain = document.querySelector(".play-again");
let score = 0;
let randNum;
let houseHand;
let playerHand;

function showModal() {
  modal.style.visibility = "visible";
  modalContainer.style.visibility = "visible";
}

function hideModal() {
  modal.style.visibility = "hidden";
  modalContainer.style.visibility = "hidden";
}

btn.addEventListener("click", showModal);
closeout.addEventListener("click", hideModal);

function showMatchup() {
  choicesContainer.style.display = "none";
  matchContainer.style.display = "block";
}

function showChoices() {
  playerCrown.style.visibility = "hidden";
  houseCrown.style.visibility = "hidden";
  choicesContainer.style.display = "grid";
  matchContainer.style.display = "none";
}

function setHouseChoice() {
  randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    houseChoice.src = "images/paper.png";
    houseHand = "paper";
  } else if (randNum === 2) {
    houseChoice.src = "images/scissors.png";
    houseHand = "scissors";
  } else if (randNum === 3) {
    houseChoice.src = "images/rock.png";
    houseHand = "rock";
  }
}

function playerChosePaper() {
  playerChoice.src = "images/paper.png";
  playerHand = "paper";
  setHouseChoice();
  showMatchup();
  selectWinner(playerHand, houseHand);
}

function playerChoseScissors() {
  playerChoice.src = "images/scissors.png";
  playerHand = "scissors";
  setHouseChoice();
  showMatchup();
  selectWinner(playerHand, houseHand);
}

function playerChoseRock() {
  playerChoice.src = "images/rock.png";
  playerHand = "rock";
  setHouseChoice();
  showMatchup();
  selectWinner(playerHand, houseHand);
}

function selectWinner(player, house) {
  if (
    (player === "rock" && house === "rock") ||
    (player === "scissors" && house === "scissors") ||
    (player === "paper" && house === "paper")
  ) {
    matchResult.textContent = "Tie";
  } else if (
    (player === "rock" && house === "paper") ||
    (player === "scissors" && house === "rock") ||
    (player === "paper" && house === "scissors")
  ) {
    matchResult.textContent = "You Lose";
    houseCrown.style.visibility = "visible";
  } else if (
    (player === "rock" && house === "scissors") ||
    (player === "scissors" && house === "paper") ||
    (player === "paper" && house === "rock")
  ) {
    matchResult.textContent = "You Win";
    playerCrown.style.visibility = "visible";
    score++;
  }
  playerScore.textContent = score;
}

paper.addEventListener("click", playerChosePaper);
scissors.addEventListener("click", playerChoseScissors);
rock.addEventListener("click", playerChoseRock);
playAgain.addEventListener("click", showChoices);

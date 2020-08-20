function userChoice(choice) {
  let choiceByUser = choice; // choice of the user

  let choiceByComputer = computerChoice(); // choice of the computer

  let decideScores = scores(choiceByUser, choiceByComputer); // function that decides thw scores betn computer and human

  let remove = removeAndAdd(choiceByUser, choiceByComputer, decideScores);

  console.log(decideScores);
}

// Setting up the computer choice

function computerChoice() {
  const options = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);

  let choiceOfComputer = options[randomChoice];
  return choiceOfComputer;
}

// deciding the the scores...

function scores(userKoChoice, computerKoChoice) {
  const choices = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  let userScore = choices[userKoChoice][computerKoChoice];
  let computerScore = choices[computerKoChoice][userKoChoice];

  let winnerName = winner(userScore, computerScore);
  let playAudioOfTheWinner = playAudioWinner(userScore, computerScore);

  playAudioOfTheWinner.play();

  return winnerName;
}

// this function decides the winner and announce througn text

function winner(userScore, computerScore) {
  if (userScore === computerScore) {
    let result = "It's a draw";
    return result;
  } else if (userScore < computerScore) {
    let result = "Computer Won";
    return result;
  } else {
    let result = "You Won";
    return result;
  }
}

// this function decides the winner and announce througn audio

function playAudioWinner(userScore, computerScore) {
  if (userScore === computerScore) {
    let announceAudio = new Audio("audio/itsaDraw.m4a");
    return announceAudio;
  } else if (userScore < computerScore) {
    let announceAudio = new Audio("audio/computerWon.m4a");
    return announceAudio;
  } else {
    let announceAudio = new Audio("audio/youWon.m4a");
    return announceAudio;
  }
}

// this function removes the contents after choosing rock,paper or scissors by the users

function removeAndAdd(choiceByUser, choiceByComputer, message) {
  let compare = {
    rock: document.getElementById("rock").getAttribute("src"),
    paper: document.getElementById("paper").getAttribute("src"),
    scissors: document.getElementById("scissors").getAttribute("src"),
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let appearAgain1 = document.createElement("img");
  let appearAgain2 = document.createElement("img");

  appearAgain1.setAttribute("src", compare[choiceByUser]);
  appearAgain2.setAttribute("src", compare[choiceByComputer]);

  appearAgain1.setAttribute("id", "afterClick1");
  appearAgain2.setAttribute("id", "afterClick2");

  let container = document.querySelector(".rockPaperScissors");

  container.appendChild(appearAgain1);
  container.appendChild(appearAgain2);

  let displayMessage = (document.querySelector("h4").textContent = "");
  displayMessage = document.querySelector("h4").textContent = message;
}

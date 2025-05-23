const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'scissors' ||
    userInput === 'paper' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('Error, please type: rock, paper or scissors.');
    return undefined; // Return undefined for invalid input
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Cheat code activated: YOU WIN!!!';
  }
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
    } else {
      return 'Congrats, you won!!!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!';
    } else {
      return 'Congrats, you won!!!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Congrats, you won!!!';
    }
  }
  return 'Invalid user choice.'; // Fallback for unexpected input
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  if (!userChoice) return; // Stop if input was invalid
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();

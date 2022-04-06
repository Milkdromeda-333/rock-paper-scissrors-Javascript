///This function takes the user input and conversts it to lowercase and then checks to see if its one of the valid options
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'scissors' || userInput == 'paper' || userInput == 'bomb') {
    return userInput
  } else {
    console.log('Error..enter a valid option! Rock, paper, or scissors.');
  }
}
/// this function generates a random number starting at zero and ending at 2, and each number is assigned a value of rock, paper, or scissors.
const getComputerChoice = () => {
  const getRandomNumber = Math.floor(Math.random()* 3);
  if (getRandomNumber == '0') {
    return 'rock';
  }
  if (getRandomNumber == '1') {
    return 'paper';
  }
  if (getRandomNumber == '2') {
    return 'scissors';
  }
}
/// When called, this function first defines an ouput if the game was a tie, and if not it determines the winner
const determineWinner = (userChoice, computerChoice) => {
if (userChoice == computerChoice) {
  return 'its a tie!';
} else if (userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissors' && computerChoice == 'paper') {
  return 'You won!';
} ///bomb always wins
else if (userChoice == 'bomb') {
  return 'win!';
} else {
  return 'You lose, bummer'
}
};

const playGame = () => {
  userChoice = getUserChoice('paper')
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);
  /// logs the winner
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();

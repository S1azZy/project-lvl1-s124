import readlineSync from 'readline-sync';

const hello = () => console.log('Welcome to the Brain Games!');

const CORRECT_ANS_TO_WIN = 3;

const getName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${username}!`);
  return username;
};

const getAns = () => readlineSync.question('Your answer: ');

const brainGames = () => {
  hello();
  getName();
};

const brainEven = () => {
  hello();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = getName();

  const correctAnswers = 0;
};


export { brainGames, brainEven };

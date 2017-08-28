import readlineSync from 'readline-sync';

const hello = () => console.log('Welcome to the Brain Games!');

const CORRECT_ANS_TO_WIN = 3;

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

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
  let countCorrectAnswers = 0;
  let question = 0;

  while (countCorrectAnswers < CORRECT_ANS_TO_WIN) {
    question = getRandomInt(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const currentAnswer = getAns();

    if (currentAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      countCorrectAnswers += 1;
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};


export { brainGames, brainEven };

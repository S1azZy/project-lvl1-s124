import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const getName = () => readlineSync.question('May I have your name? ');
const getAns = () => readlineSync.question('Your answer: ');

const gameEngine = (startMassage, rules, countCorrectAnswersToWin = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMassage);
  const username = getName();
  console.log(`Hello, ${username}!`);

  let countCorrectAnswers = 0;

  while (countCorrectAnswers < countCorrectAnswersToWin) {
    const result = rules();
    console.log(`Question: ${car(result)}`);
    const correctAnswer = cdr(result).toString();
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


export { getRandomInt, gameEngine };

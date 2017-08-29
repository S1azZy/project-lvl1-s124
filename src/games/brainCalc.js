import { cons, car, cdr } from 'hexlet-pairs';
import { getAns, getRandomInt } from '..';
import Game from './game';


const getOperation = (num) => {
  switch (num) {
    case 1:
      return cons('+', (num1, num2) => num1 + num2);
    case 2:
      return cons('-', (num1, num2) => num1 - num2);
    case 3:
      return cons('*', (num1, num2) => num1 * num2);
    default:
      throw Error;
  }
};

const getRandomOperation = () => getOperation(getRandomInt(1, 3));

export default class BrainCalc extends Game {
  constructor() {
    super('brainCalc');
    this.countCorrectAnswersToWin = 3;
  }

  playGame() {
    this.hello();
    console.log('What is the result of the expression?');
    let countCorrectAnswers = 0;

    while (countCorrectAnswers < this.countCorrectAnswersToWin) {
      const num1 = getRandomInt(1, 100);
      const num2 = getRandomInt(1, 100);
      const operation = getRandomOperation();
      console.log(`Question: ${num1} ${car(operation)} ${num2}`);
      const correctAnswer = cdr(operation(num1, num2));
      const currentAnswer = getAns();

      if (String(currentAnswer) === String(correctAnswer)) {
        countCorrectAnswers += 1;
      } else {
        console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        return;
      }
    }
    this.congratulations();
  }
}

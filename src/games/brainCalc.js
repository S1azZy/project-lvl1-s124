import { cons, car, cdr } from 'hexlet-pairs';
import gameEngine from '..';
import getRandomInt from '../tools/getRandomInt';

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

export default () => {
  const startMassage = 'What is the result of the expression?\n';
  const rules = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operation = getRandomOperation();
    const question = `${num1} ${car(operation)} ${num2}`;
    const correctAnswer = cdr(operation)(num1, num2);
    return cons(question, correctAnswer);
  };
  gameEngine(startMassage, rules);
};

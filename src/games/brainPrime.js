import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import getRandomInt from '../tools/getRandomInt';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const startMassage = 'What number is missing in this progression?\n';
  const rules = () => {
    const n = getRandomInt(1, 9999);
    const question = `${n}`;
    const correctAnswer = isPrime(n) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };
  gameEngine(startMassage, rules);
};

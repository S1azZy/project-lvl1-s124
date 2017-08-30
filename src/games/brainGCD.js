import { cons } from 'hexlet-pairs';
import { getRandomInt, gameEngine } from '..';

const gcd = (n, m) => {
  if (m === 0) {
    return n;
  }
  return gcd(m, n % m);
};


export default () => {
  const startMassage = 'Find the greatest common divisor of given numbers.\n';
  const rules = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2);
    return cons(question, correctAnswer);
  };
  gameEngine(startMassage, rules);
};

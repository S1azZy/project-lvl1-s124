import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import getRandomInt from '../tools/getRandomInt';

export default () => {
  const startMassage = 'Balance the given number.\n';
  const rules = () => {
    const num1 = getRandomInt(100, 9999);
    const question = `${num1}`;
    const correctAnswer = '';
    return cons(question, correctAnswer);
  };
  gameEngine(startMassage, rules);
};

import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import getRandomInt from '../tools/getRandomInt';

const progressionLength = 10;

const makeProgression = () => {
  const startNumber = getRandomInt(0, 100);
  const step = getRandomInt(1, 100);
  const arr = [];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(startNumber + (step * i));
  }
  return arr.map(String);
};

export default () => {
  const startMassage = 'What number is missing in this progression?\n';
  const rules = () => {
    const progression = makeProgression();
    const position = getRandomInt(0, progressionLength - 1);
    const correctAnswer = progression[position];
    progression[position] = '..';
    const question = progression.join(' ');

    return cons(question, correctAnswer);
  };
  gameEngine(startMassage, rules);
};

import { cons } from 'hexlet-pairs';
import { getRandomInt, gameEngine } from '..';

export default () => {
  const startMassage = 'Answer "yes" if number even otherwise answer "no".\n';
  const rules = () => {
    const num = getRandomInt(1, 100);
    return cons(num, num % 2 === 0 ? 'yes' : 'no');
  };
  gameEngine(startMassage, rules);
};

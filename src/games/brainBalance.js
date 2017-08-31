import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import getRandomInt from '../tools/getRandomInt';

const balance = (n) => {
  const arr = Array.from(n.toString()).map(Number);

  let goodEnough = false;
  while (!goodEnough) {
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
    if (Math.abs(arr[maxIndex] - arr[minIndex]) <= 1) {
      goodEnough = true;
    }
    if (!goodEnough) {
      arr[maxIndex] -= 1;
      arr[minIndex] += 1;
    }
  }
  return arr.sort().join('');
};

export default () => {
  const startMassage = 'Balance the given number.\n';
  const rules = () => {
    const num = getRandomInt(100, 9999);
    const question = `${num}`;
    const correctAnswer = balance(num);
    return cons(question, correctAnswer);
  };
  gameEngine(startMassage, rules);
};

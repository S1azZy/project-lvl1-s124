import readlineSync from 'readline-sync';

const hello = () => console.log('Welcome to the Brain Games!');

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${username}!`);
  return username;
};

const getAns = () => readlineSync.question('Your answer: ');


export { getAns, getName, getRandomInt, hello };

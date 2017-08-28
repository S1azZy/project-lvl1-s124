import readlineSync from 'readline-sync';

const askQuestion = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${actual}!`);
};

export default askQuestion;

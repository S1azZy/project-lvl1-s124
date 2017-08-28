import readlineSync from 'readline-sync';

const hello = () => console.log('Welcome to the Brain Games!');

const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${username}!`);
  return username;
};

const brainGames = () => {
  hello();
  askName();
};

const brainEven = () => {
  hello();
  const username = askName();
};


export { brainGames, brainEven };

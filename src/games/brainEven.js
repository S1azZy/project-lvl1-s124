import { hello, getName, getAns, getRandomInt } from '..';

const countCorrectAnswersToWin = 3;

const brainEven = () => {
  hello();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = getName();
  let countCorrectAnswers = 0;
  let question = 0;

  while (countCorrectAnswers < countCorrectAnswersToWin) {
    question = getRandomInt(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const currentAnswer = getAns();

    if (currentAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      countCorrectAnswers += 1;
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default brainEven;

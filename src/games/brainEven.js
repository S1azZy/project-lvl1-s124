import { getAns, getRandomInt } from '..';
import Game from './game';

export default class BrainEven extends Game {
  constructor() {
    super('brainEven');
    this.countCorrectAnswersToWin = 3;
  }

  playGame() {
    Game.hello();
    this.username = this.getName();
    console.log('Answer "yes" if number even otherwise answer "no".\n');
    let countCorrectAnswers = 0;
    let question = 0;

    while (countCorrectAnswers < this.countCorrectAnswersToWin) {
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
    this.congratulations();
  }
}

import readlineSync from 'readline-sync';
import { getName } from '..';

class Game {
  constructor(name) {
    this.name = name;
    this.username = '';
  }

  playGame() {
    this.hello();
    this.username = getName();
  }

  static hello() {
    console.log('Welcome to the Brain Games!');
  }

  getName() {
    this.username = readlineSync.question('May I have your name? ');
    console.log(`\nHello, ${this.username}!`);
  }

  congratulations() {
    console.log(`Congratulations, ${this.username}!`);
  }
}

export default Game;

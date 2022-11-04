import { generateRandomNumber } from '../utils.js';
import playBrainGame from '../index.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const evenIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRoundData = () => {
    const randomNumber = generateRandomNumber(100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };

  playBrainGame(evenIntro, generateRoundData);
};

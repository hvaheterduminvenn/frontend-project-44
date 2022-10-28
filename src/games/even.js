import { generateRandomNumber } from '../utils.js';
import playBrainGame from '../index.js';

export default () => {
  const evenIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestion = () => {
    const randomNumber = generateRandomNumber(100);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };

  playBrainGame(evenIntro, generateQuestion);
};

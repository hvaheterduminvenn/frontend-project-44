import { generateRandomNumber, getDivisors } from '../utils.js';
import playBrainGame from '../index.js';

export default () => {
  const primeIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const randomNumber = generateRandomNumber(200);
    const correctAnswer = getDivisors(randomNumber).length <= 2 ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };

  playBrainGame(primeIntro, generateQuestionAndAnswer);
};

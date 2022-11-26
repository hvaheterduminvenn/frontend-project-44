import generateRandomNumber from '../utils.js';
import playBrainGame from '../index.js';

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRoundData = () => {
  const randomNumber = generateRandomNumber(100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => {
  playBrainGame(evenDescription, generateRoundData);
};

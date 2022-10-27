import { outputQuestion, generateRandomNumber } from '../utils.js';

export const evenIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

export const outputEvenQuestion = () => {
  const randomNumber = generateRandomNumber(100);
  outputQuestion(randomNumber);

  return randomNumber % 2 === 0 ? 'yes' : 'no';
};

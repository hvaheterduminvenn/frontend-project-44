import { outputQuestion, generateRandomNumber, getDivisors } from '../utils.js';

export const primeIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const outputPrimeQuestion = () => {
  const randomNumber = generateRandomNumber(200);
  outputQuestion(randomNumber);
  return getDivisors(randomNumber).length <= 2 ? 'yes' : 'no';
};

import { outputQuestion, generateRandomNumber } from '../src/utils.js';

export const primeIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const outputPrimeQuestion = () => {
  const randomNumber = generateRandomNumber(200);
  outputQuestion(randomNumber);

  const factors = [];
  for (let i = 1; i <= (randomNumber / 2); i += 1) {
    if (randomNumber % i === 0) {
      factors.push(i);
    }
  }
  factors.push(randomNumber);

  return factors.length <= 2 ? 'yes' : 'no';
};

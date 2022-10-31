import { generateRandomNumber, getDivisors } from '../utils.js';
import playBrainGame from '../index.js';

const getGcd = (a, b) => {
  const aDivisors = getDivisors(a);
  const bDivisors = getDivisors(b);

  let index = aDivisors.length - 1;
  let gcd = aDivisors[index];
  while (gcd > 1 && !bDivisors.includes(gcd)) {
    index -= 1;
    gcd = aDivisors[index];
  }

  return gcd;
};

export default () => {
  const gcdIntro = 'Find the greatest common divisor of given numbers.';

  const generateQuestionAndAnswer = () => {
    const number1 = generateRandomNumber(100);
    const number2 = generateRandomNumber(100);

    const question = `${number1} ${number2}`;
    const correctAnswer = getGcd(number1, number2).toString();
    return [question, correctAnswer];
  };

  playBrainGame(gcdIntro, generateQuestionAndAnswer);
};

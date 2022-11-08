import generateRandomNumber from '../utils.js';
import playBrainGame from '../index.js';

const getDivisors = (number) => {
  const divisors = [];
  for (let i = 1; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  divisors.push(number);

  return divisors;
};

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

const gcdIntro = 'Find the greatest common divisor of given numbers.';

const generateRoundData = () => {
  const number1 = generateRandomNumber(100);
  const number2 = generateRandomNumber(100);

  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();
  return [question, correctAnswer];
};

export default () => {
  playBrainGame(gcdIntro, generateRoundData);
};

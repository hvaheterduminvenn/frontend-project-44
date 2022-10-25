import { outputQuestion, generateRandomNumber } from '../src/utils.js';

export const gcdIntro = 'Find the greatest common divisor of given numbers.';

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

export const outputGcdQuestion = () => {
  const number1 = generateRandomNumber(100);
  const number2 = generateRandomNumber(100);
  outputQuestion(`${number1} ${number2}`);

  return getGcd(number1, number2);
};

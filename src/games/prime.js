import generateRandomNumber from '../utils.js';
import playBrainGame from '../index.js';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const divisors = [];
  for (let i = 1; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  divisors.push(number);

  return divisors.length <= 2;
};

const generateRoundData = () => {
  const randomNumber = generateRandomNumber(200);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => {
  playBrainGame(primeDescription, generateRoundData);
};

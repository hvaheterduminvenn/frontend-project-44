import { outputQuestion, generateRandomNumber } from '../src/utils.js';

const evenIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

const outputEvenQuestion = () => {
  console.log(evenIntro);
  const randomNumber = generateRandomNumber(100);
  outputQuestion(randomNumber);

  return randomNumber % 2 === 0 ? 'yes' : 'no';
};

export default outputEvenQuestion;

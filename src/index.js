import greetUser, { totalQuestions } from './cli.js';
import { evenIntro, outputEvenQuestion } from '../games/even.js';
import { calcIntro, outputCalcQuestion } from '../games/calc.js';
import { gcdIntro, outputGcdQuestion } from '../games/gcd.js';
import { progressionIntro, outputProgressionQuestion } from '../games/progression.js';
import { primeIntro, outputPrimeQuestion } from '../games/prime.js';
import { getUserAnswer } from './utils.js';

const outputGameQuestion = (gameType) => {
  switch (gameType) {
    case 'even': return outputEvenQuestion();
    case 'calc': return outputCalcQuestion();
    case 'gcd': return outputGcdQuestion();
    case 'progression': return outputProgressionQuestion();
    case 'prime': return outputPrimeQuestion();
    default:
      console.log('Houston, we have a problem!');
      return null;
  }
};

const askQuestion = (gameType) => {
  const correctAnswer = outputGameQuestion(gameType);
  const answer = getUserAnswer();
  const isCorrect = answer === 'yes' || answer === 'no'
    ? answer === correctAnswer
    : Number(answer) === correctAnswer;

  return [isCorrect, answer, correctAnswer];
};

const getQuestionComment = (isCorrect, answer, correctAnswer) => {
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  }
};

const outputIntro = (gameType) => {
  switch (gameType) {
    case 'even':
      console.log(evenIntro);
      break;
    case 'calc':
      console.log(calcIntro);
      break;
    case 'gcd':
      console.log(gcdIntro);
      break;
    case 'progression':
      console.log(progressionIntro);
      break;
    case 'prime':
      console.log(primeIntro);
      break;
    default:
      console.log('Houston, we have a problem!');
  }
};

const getGameResults = (isSuccessful, userName) => {
  if (isSuccessful) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

const playBrainGame = (gameType) => {
  const userName = greetUser();
  outputIntro(gameType);

  let question = 0;
  let areAllCorrect = true;
  while (areAllCorrect && question < totalQuestions) {
    const [isAnswerCorrect, answer, correctAnswer] = askQuestion(gameType);
    getQuestionComment(isAnswerCorrect, answer, correctAnswer);

    if (isAnswerCorrect) {
      question += 1;
    } else {
      areAllCorrect = false;
    }
  }

  getGameResults(areAllCorrect, userName);
};

export default playBrainGame;

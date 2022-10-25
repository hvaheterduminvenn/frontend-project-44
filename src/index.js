import greetUser, { totalQuestions } from './cli.js';
import { evenIntro, outputEvenQuestion } from '../games/even.js';
import { calcIntro, outputCalcQuestion } from '../games/calc.js';
import { gcdIntro, outputGcdQuestion } from '../games/gcd.js';
import { progressionIntro, outputProgressionQuestion } from '../games/progression.js';
import { getUserAnswer } from './utils.js';

const askQuestion = (gameType) => {
  let correctAnswer;

  switch (gameType) {
    case 'even': {
      correctAnswer = outputEvenQuestion();
      break;
    }
    case 'calc': {
      correctAnswer = outputCalcQuestion();
      break;
    }
    case 'gcd': {
      correctAnswer = outputGcdQuestion();
      break;
    }
    case 'progression': {
      correctAnswer = outputProgressionQuestion();
      break;
    }
    default:
      console.log('Houston, we have a problem!');
  }

  const answer = getUserAnswer();
  const isCorrect = gameType === 'even'
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
    default:
      console.log('Houston, we have a problem!');
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

  if (areAllCorrect) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default playBrainGame;

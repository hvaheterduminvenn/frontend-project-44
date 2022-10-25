import greetUser, { totalQuestions } from './cli.js';
import { outputEvenQuestion } from '../games/even.js';
import { outputCalcQuestion } from '../games/calc.js';
import { getUserAnswer } from './utils.js';

const askQuestion = (gameType) => {
  let answer;
  let correctAnswer;
  let isCorrect;

  switch (gameType) {
    case 'even': {
      correctAnswer = outputEvenQuestion();
      answer = getUserAnswer();
      isCorrect = answer === correctAnswer;
      break;
    }
    case 'calc': {
      correctAnswer = outputCalcQuestion();
      answer = getUserAnswer();
      isCorrect = Number(answer) === correctAnswer;
      break;
    }
    default:
      console.log('Houston, we have a problem!');
  }

  return [isCorrect, answer, correctAnswer];
};

const getQuestionComment = (isCorrect, answer, correctAnswer) => {
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  }
};

export default (gameType) => {
  const userName = greetUser();

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

import { generateRandomNumber } from '../utils.js';
import playBrainGame from '../index.js';

export default () => {
  const progressionIntro = 'What number is missing in the progression?';

  const generateQuestionAndAnswer = () => {
    const randomOperand = generateRandomNumber(50);
    const randomAddend = generateRandomNumber(5);
    const progression = [randomOperand];
    for (let i = 1; i < 10; i += 1) {
      progression.push(randomOperand + randomAddend * i);
    }

    const randomIndex = generateRandomNumber(progression.length - 1);
    const correctAnswer = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

  playBrainGame(progressionIntro, generateQuestionAndAnswer);
};

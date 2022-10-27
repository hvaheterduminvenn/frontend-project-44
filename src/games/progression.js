import { outputQuestion, generateRandomNumber } from '../utils.js';

export const progressionIntro = 'What number is missing in the progression?';

export const outputProgressionQuestion = () => {
  const randomOperand = generateRandomNumber(50);
  const randomAddend = generateRandomNumber(5);
  const progression = [randomOperand];
  for (let i = 1; i < 10; i += 1) {
    progression.push(randomOperand + randomAddend * i);
  }

  const randomIndex = generateRandomNumber(progression.length - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  outputQuestion(progression.join(' '));

  return correctAnswer;
};

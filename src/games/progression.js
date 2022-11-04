import { generateRandomNumber } from '../utils.js';
import playBrainGame from '../index.js';

const generateProgression = (operand, addend, length) => {
  const progression = [operand];
  for (let i = 1; i < length; i += 1) {
    progression.push(operand + addend * i);
  }
  return progression;
};

export default () => {
  const progressionIntro = 'What number is missing in the progression?';

  const generateRoundData = () => {
    const randomOperand = generateRandomNumber(50);
    const randomAddend = generateRandomNumber(5);
    const progression = generateProgression(randomOperand, randomAddend, 10);

    const randomIndex = generateRandomNumber(progression.length - 1);
    const correctAnswer = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

  playBrainGame(progressionIntro, generateRoundData);
};

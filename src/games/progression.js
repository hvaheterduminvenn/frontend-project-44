import generateRandomNumber from '../utils.js';
import playBrainGame from '../index.js';

const PROGRESSION_DEFAULT_LENGTH = 10;

const progressionIntro = 'What number is missing in the progression?';

const generateProgression = (operand, addend, length) => {
  const progression = [operand];
  for (let i = 1; i < length; i += 1) {
    progression.push(operand + addend * i);
  }
  return progression;
};

const generateRoundData = () => {
  const randomOperand = generateRandomNumber(50);
  const randomAddend = generateRandomNumber(5);
  const progression = generateProgression(randomOperand, randomAddend, PROGRESSION_DEFAULT_LENGTH);

  const randomIndex = generateRandomNumber(progression.length - 1);
  const correctAnswer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  playBrainGame(progressionIntro, generateRoundData);
};

import readlineSync from 'readline-sync';

export const generateRandomNumber = (maxNumber) => Math.ceil(Math.random() * maxNumber);

export const outputQuestion = (questionContent) => {
  console.log(`Question: ${questionContent}`);
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

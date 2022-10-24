#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = 'Sam';

// Greeting
console.log('Welcome to the Brain Games!');
console.log(`May I have your name? ${userName}`);
console.log(`Hello, ${userName}!`);

// Even part

const askQuestion = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer === correctAnswer, answer];
};

const getQuestionComment = (isCorrect, answer) => {
  if (isCorrect) {
    console.log('Correct!');
  } else {
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  }
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let question = 0;
let areAllCorrect = true;
while (areAllCorrect && question < 3) {
  const [isAnswerCorrect, answer] = askQuestion();
  getQuestionComment(isAnswerCorrect, answer);

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

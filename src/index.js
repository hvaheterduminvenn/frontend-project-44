import readlineSync from 'readline-sync';

const playBrainGame = (intro, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(intro);

  const totalRounds = 3;
  for (let i = 1; i <= totalRounds; i += 1) {
    const [questionContent, correctAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${questionContent}`);
    const answer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = answer === correctAnswer;

    if (isAnswerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainGame;

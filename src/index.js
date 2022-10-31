import readlineSync from 'readline-sync';

const playBrainGame = (intro, generateQuestionAndAnswer) => {
  // Greet User
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Print game description
  console.log(intro);

  const totalRounds = 3;
  for (let question = 1; question <= totalRounds; question += 1) {
    // Ask question
    const [questionContent, correctAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${questionContent}`);
    const answer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = answer === correctAnswer;

    // Get question comment
    if (isAnswerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    }

    if (!isAnswerCorrect) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (question === totalRounds && isAnswerCorrect) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playBrainGame;

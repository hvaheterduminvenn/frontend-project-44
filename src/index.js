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
      if (question === totalRounds) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default playBrainGame;

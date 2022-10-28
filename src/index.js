import readlineSync from 'readline-sync';

const playBrainGame = (intro, generateQuestion) => {
  // Greet User
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Print game description
  console.log(intro);

  const totalQuestions = 3;
  let question = 0;
  let areAllCorrect = true;
  while (areAllCorrect && question < totalQuestions) {
    // Ask question
    const [questionContent, correctAnswer] = generateQuestion();
    console.log(`Question: ${questionContent}`);
    const answer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = answer === 'yes' || answer === 'no'
      ? answer === correctAnswer
      : Number(answer) === correctAnswer;

    // Get question comment
    if (isAnswerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    }

    if (isAnswerCorrect) {
      question += 1;
    } else {
      areAllCorrect = false;
    }
  }

  // Get game results
  if (areAllCorrect) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default playBrainGame;

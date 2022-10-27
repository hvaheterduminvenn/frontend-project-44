import { outputQuestion, generateRandomNumber } from '../utils.js';

export const calcIntro = 'What is the result of the expression?';

const getCalcResult = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return undefined;
  }
};

export const outputCalcQuestion = () => {
  const mathOperators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * mathOperators.length);
  const randomMathOperator = mathOperators[randomNumber];

  const operand1 = generateRandomNumber(100);
  const operand2 = generateRandomNumber(10);

  const question = `${operand1} ${randomMathOperator} ${operand2}`;
  outputQuestion(question);

  return getCalcResult(operand1, operand2, randomMathOperator);
};

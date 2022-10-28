export const generateRandomNumber = (maxNumber) => Math.ceil(Math.random() * maxNumber);

export const getDivisors = (number) => {
  const divisors = [];
  for (let i = 1; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  divisors.push(number);

  return divisors;
};

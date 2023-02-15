let startNumber, endNumber;
const getInput = (message) => {
  let input = prompt(message)
    .split(",")
    .map((num) => Number(num));
  console.log(input);
  [startNumber, endNumber] = input;
};
const inputNumbers = (message) => {
  getInput(message);
  while (
    isNaN(startNumber) ||
    isNaN(endNumber) ||
    startNumber <= 1 ||
    endNumber <= 1 ||
    startNumber % 1 !== 0 ||
    endNumber % 1 !== 0
  ) {
    console.log(
      "Wrong input, Please enter two numbers which are greater than 1"
    );
    getInput("Enter the numbers which are greater than 1");
  }
  return [startNumber, endNumber];
};

const isPrime = (num) => {
  let limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

[startNumber, endNumber] = inputNumbers(
  "Enter two numbers separated by a comma: "
);

if (startNumber > endNumber)
  [startNumber, endNumber] = [endNumber, startNumber];
console.log(
  `Prime numbers between ${startNumber} and ${endNumber} are as follows:`
);
for (let i = startNumber; i <= endNumber; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

let m, n;

const inputNumbers = (message) => {
  let input = prompt(message).split(',').map(num => parseInt(num));
  let m = input[0];
  let n = input[1];
  while (isNaN(m) || isNaN(n) || m <= 1 || n <= 1) {
    console.log("Wrong input, Please enter two numbers which are greater than 1")
    input = prompt("Enter the numbers which are greater than 1").split(',').map(num => parseInt(num));
    m = input[0];
    n = input[1];
  }
  return [m, n];
};

const isPrime = (num) => {
  let limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

[m, n] = inputNumbers("Enter two numbers separated by a comma: ");

if (m > n) [m, n] = [n, m];
console.log(`Prime numbers between ${m} and ${n} are as follows:`);
for (let i = m; i <= n; i++) {
  if (isPrime(i)){
    console.log(i);
  } 
}

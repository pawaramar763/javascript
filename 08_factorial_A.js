function factorialOfNum(num) {
  let factorial = 1;
  if (num == null || num == undefined || isNaN(num)) {
    console.log(`${num} - Invalid data entered`);
  }
  for (let index = num; index >= 1; index--) {
    factorial = factorial * index;
  }
  return factorial;
}
let returnFactorial = factorialOfNum(5);
console.log(`Factorial of 5 is  : ${returnFactorial} `);
returnFactorial = factorialOfNum(3);
console.log(`Factorial of 3 is : ${returnFactorial}`);
returnFactorial = factorialOfNum(null);
returnFactorial = factorialOfNum(8);
console.log(`Factorial of 8 is : ${returnFactorial}`);
returnFactorial = factorialOfNum(undefined);
returnFactorial = factorialOfNum(9);
console.log(`Factorial of 9 is : ${returnFactorial}`);
returnFactorial = factorialOfNum(0);
console.log(`Factorial of 0 is : ${returnFactorial}`);

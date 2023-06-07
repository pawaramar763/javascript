const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array: [${arrayNumbers}]`);

console.log(`1.Numbers which are greater than 50`);
let greaterThanFifty = arrayNumbers.filter((element) => {
  return element > 50;
});
console.log(`Answer is: ${greaterThanFifty}`);
console.log(
  `----------------------------------------------------------------------`
);

console.log(`2.Even numbers in given array`);
let evenNum = arrayNumbers.filter((element) => {
  return element % 2 == 0;
});
console.log(`Answer is: ${evenNum}`);
console.log(
  `----------------------------------------------------------------------`
);

console.log(`3.Odd numbers in given array`);
let oddNum = arrayNumbers.filter((element) => {
  return element % 2 != 0;
});
console.log(`Answer is: ${oddNum}`);
console.log(
  `----------------------------------------------------------------------`
);

console.log(`4.Numbers which are multiple of 5`);
let multipleOfFive = arrayNumbers.filter((element) => {
  return element % 5 == 0;
});
console.log(`Answer is: ${multipleOfFive}`);
console.log(
  `----------------------------------------------------------------------`
);

console.log(`5.All numbers between 20 and 50`);
let numBetween = arrayNumbers.filter((element) => {
  return element >= 20 && element <= 50;
});
console.log(`Answer is: ${numBetween}`);

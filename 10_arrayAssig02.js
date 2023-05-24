const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array : [${arrayNumbers}]`);
let arrayLength = arrayNumbers.length;
console.log(`1.Total number of elements available : ${arrayLength}`);
console.log(
  `--------------------------------------------------------------------------------`
);

let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(
  `2.First element : ${firstElement} and Last element : ${lastElement}`
);
console.log(
  `--------------------------------------------------------------------------------`
);

let thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
console.log(`3.Third last element: ${thirdLastElement}`);
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`4.All even numbers`);
for (const index in arrayNumbers) {
  let element = arrayNumbers[index];
  // console.log(element);
  if (element % 2 == 0) {
    console.log(element);
  }
}
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`5.All odd numbers`);
for (const index in arrayNumbers) {
  let value = arrayNumbers[index];
  if (value % 2 != 0) {
    console.log(value);
  }
}
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`6.All even position element and there sum`);
let sumOfEvenPosition = 0;
for (const index in arrayNumbers) {
  let evenPositionElement = arrayNumbers[index];
  if (index % 2 == 0) {
    console.log(evenPositionElement);
    sumOfEvenPosition += evenPositionElement;
  }
}
console.log(`Sum of even position elements : ${sumOfEvenPosition}`);
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`7.All odd position element and there sum`);
let sumOfOddPosition = 0;
for (const index in arrayNumbers) {
  let oddPositionElement = arrayNumbers[index];
  if (index % 2 != 0) {
    console.log(oddPositionElement);
    sumOfOddPosition += oddPositionElement;
  }
}
console.log(`Sum of odd position elements : ${sumOfOddPosition}`);
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`8.Sum of all elements from array`);
let sumOfAllElements = 0;
for (const index in arrayNumbers) {
  let elementsForSum = arrayNumbers[index];
  sumOfAllElements += elementsForSum;
}
console.log(`Sum of all elements ${sumOfAllElements}`);
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`9.numbers which are multiple of 5`);
for (const index in arrayNumbers) {
  let multipleOfFive = arrayNumbers[index];
  if (multipleOfFive % 5 == 0) {
    console.log(multipleOfFive);
  }
}
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`10. Is number 115 available`);
let isAvailable = arrayNumbers.includes(115);
console.log(isAvailable);
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`11.Is number 23 available`);
let isTwentyThree = arrayNumbers.includes(23);
console.log(isTwentyThree);
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`12.Insert number 55,66 before index 3`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`${arrayNumbers}`);
console.log(
  `--------------------------------------------------------------------------------`
);

console.log(`13.Delete 3 elements starting from index 4`);
arrayNumbers.splice(4, 3);
console.log(`${arrayNumbers}`);

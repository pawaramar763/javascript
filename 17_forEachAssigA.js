const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach((element, index) => {
  console.log(`Index:${index}, Element:${element}`);
});
console.log(
  `------------------------------------------------------------------`
);

console.log(`Positive numbers in given array:`);
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});
console.log(
  `------------------------------------------------------------------`
);

console.log(`Negative numbers:`);
let negativeNumbers = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});
console.log(negativeNumbers);
console.log(
  `------------------------------------------------------------------`
);

console.log(`Positive numbers:`);
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});
console.log(
  `------------------------------------------------------------------`
);


let sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(`Sum of all elements: ${sum}`);
console.log(
  `------------------------------------------------------------------`
);

console.log(`Even indexed array:`);
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(index, element);
  }
});

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array:`);
console.log(arrayNumbers);
const addTen = arrayNumbers.map((element) => {
  return element + 10;
});
console.log(`Added 10 in each :`);
console.log(arrayNumbers);
console.log(`----------------------------------------------------------------`);

console.log(`2.Square of each array element`);
const squareArray = arrayNumbers.map((element) => {
  return element * element;
});
console.log(squareArray);
console.log(`----------------------------------------------------------------`);

console.log(`3.Add index value to its corresponding element:`);
const addIndexAndElement = arrayNumbers.map((element, index) => {
  return element + index;
});
console.log(addIndexAndElement);
console.log(`----------------------------------------------------------------`);

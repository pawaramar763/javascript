console.log(`1.Numbers from 5 to 15:`);
let j = 5;
let fiveToFitfeen = "";
while (j <= 15) {
  fiveToFitfeen = fiveToFitfeen + " " + j;
  j++;
}
console.log(fiveToFitfeen);
console.log(`---------------------------------------------------------`);

console.log(`2.Numbers from 50 to 40:`);
let k = 50;
let fiftyToForty = "";
while (k >= 40) {
  fiftyToForty = fiftyToForty + " " + k;
  k--;
}
console.log(fiftyToForty);
console.log(`---------------------------------------------------------`);

console.log(`3.First 15 odd numbers:`);
let oddNumbers = 1;
let firstFifteen = "";
while (oddNumbers <= 15) {
  firstFifteen = firstFifteen + " " + oddNumbers;
  oddNumbers = oddNumbers + 2;
}
console.log(firstFifteen);
console.log(`---------------------------------------------------------`);

console.log(`4.First 10 even numbers:`);
var i = 0;
let firstTen = "";
while (i <= 10) {
  firstTen = firstTen + " " + i;
  i = i + 2;
}
console.log(firstTen);
console.log(`---------------------------------------------------------`);

console.log(`5.Table of 5:`);
var i = 5;
let tableOfFive = "";
while (i <= 50) {
  tableOfFive = tableOfFive + " " + i;
  i = i + 5;
}
console.log(tableOfFive);
console.log(`---------------------------------------------------------`);

console.log(`6.Table of 10:`);
var i = 10;
let tableOfTen = "";
while (i <= 100) {
  tableOfTen = tableOfTen + " " + i;
  i = i + 10;
}
console.log(tableOfTen);
console.log(`---------------------------------------------------------`);

console.log(`7.Table of 10 in reverse order:`);
let t = 100;
let reverseTable = "";
while (t >= 10) {
  reverseTable = reverseTable + " " + t;
  t = t - 10;
}
console.log(reverseTable);
console.log(`---------------------------------------------------------`);

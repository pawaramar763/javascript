var graterNumber = function (valueOne, valueTwo) {
  var greatest =
    valueOne > valueTwo
      ? `Greater number is: ${valueOne}`
      : `Greater number is: ${valueTwo}`;
  console.log(greatest);
};
console.log(`1.Solutions:`);
graterNumber(10, -10);
graterNumber(800, 899);
console.log(
  `-----------------------------------------------------------------`
);

var isEvenOrOddNumber = function (num) {
  var result = num % 2 == 0 ? true : false;
  return result;
};
console.log(`2.Solutions:`);
var returnResult = isEvenOrOddNumber(29);
var final = returnResult == true ? `29 is even number` : `29 is odd number`;
console.log(final);

var returnResult = isEvenOrOddNumber(44);
var final = returnResult == true ? `44 is even number` : `44 is odd number`;
console.log(final);

var returnResult = isEvenOrOddNumber(0);
var final = returnResult == true ? `0 is even number` : `0 is odd number`;
console.log(final);

var returnResult = isEvenOrOddNumber(101);
var final = returnResult == true ? `101 is even number` : `101 is odd number`;
console.log(final);
console.log(
  `-----------------------------------------------------------------`
);

var wordLength = function (value) {
  var valueLength = value.length;
  var result = valueLength % 2 == 0 ? "EVEN" : "ODD";
  return result;
};
console.log(`3.Solutions`);
returnValue = wordLength("JavaScript");
console.log(`JavaScript has ${returnValue} count`);

returnValue = wordLength("developer");
console.log(`developer has ${returnValue} count`);

returnValue = wordLength("Google");
console.log(`Google has ${returnValue} count`);
console.log(
  `-----------------------------------------------------------------`
);

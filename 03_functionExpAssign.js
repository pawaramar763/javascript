console.log(`1.Solutions:-`);
var square = function (num1, num2, num3, num4) {
  console.log(`1.1 = square of "5" is:    ${num1 * num1}`);
  console.log(`1.2 = square of "6" is:    ${num2 * num2}`);
  console.log(`1.3 = square if "25" is:   ${num3 * num3}`);
  console.log(`1.4 = square of "100" is:  ${num4 * num4}`);
};
square(5, 6, 25, 100);
console.log(
  `----------------------------------------------------------------------------------------`
);

console.log(`2.Solution:-`);
console.log(`2.1=Type of function is: ${typeof square}`);
console.log(
  `----------------------------------------------------------------------------------------`
);

console.log(`3.Solution:-`);
var area = function (length, width) {
  console.log(`3.1=Area of rectangle is: ${length * width}`);
};
area(499, 917);
console.log(
  `----------------------------------------------------------------------------------------`
);

console.log(`4.Solutions:-`);
var swapValues = function (argOne, argTwo) {
  console.log(`Before swap values are: ${argOne},${argTwo}`);
  var temp = argOne;
  argOne = argTwo;
  argTwo = temp;
  console.log(`After swap values are: ${argOne},${argTwo}`);
};
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log(
  `----------------------------------------------------------------------------------------`
);

console.log(`5.Solutions:-`);
var givenString = function () {
  var myString = "JS the most popular language of internet";
  console.log(
    `5.1=Total number of characters available in the string: ${myString.length}`
  );

  charAtSix = myString.charAt(6);
  console.log(`5.2=Character at index 6: ${charAtSix}`);

  charAtEleven = myString.charAt(11);
  console.log(`5.3=Character at index 11: ${charAtEleven}`);

  lastChar = myString.charAt(myString.length - 1);
  console.log(`5.4=Last character is: ${lastChar}`);

  firstChar = myString.charAt(0);
  console.log(`5.5=First character is: ${firstChar}`);

  totalWords = myString.split(" ");
  count = totalWords.length;
  console.log(
    `5.6=Total words in given string: ${count} and it's square is: ${
      count * count
    }`
  );
};
givenString();
console.log(
  `----------------------------------------------------------------------------------------`
);

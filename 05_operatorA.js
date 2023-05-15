function squareOfWordLength(valueOne) {
  var jsLength = valueOne.length;
  console.log(`The length of given word is: ${jsLength}`);
  console.log(`Squareof it's length is ${jsLength * jsLength}`);
  console.log(`=================================================`);
}
console.log(`1."JavaScript"`);
squareOfWordLength("JavaScript");
console.log(`"Google Chrome"`);
squareOfWordLength("Google Chrome");
console.log(`"Developer Smart"`);
squareOfWordLength("Developer Smart");

function givenString() {
  var myString = "I am Angular Developer";
  console.log(`2.Given string is: "${myString}"`);
  var stringLength = myString.length;
  console.log(`Length of given string: ${stringLength}`);
  var totalWords = myString.split(" ");
  var totalWordsLength = totalWords.length;
  console.log(`Total number of words available in string: ${totalWordsLength}`);
  console.log(`Result after dividing: ${stringLength / totalWordsLength}`);
  console.log(
    `Result after multiplication: ${stringLength * totalWordsLength}`
  );
}
givenString();
console.log(`=================================================`);

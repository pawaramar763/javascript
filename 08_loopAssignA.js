var givenString = "I am very good IT Developer";
var mystring = "";
count = 0;
for (let index = 0; index < givenString.length; index++) {
  var char = givenString.charAt(index);
  var mystring = mystring.concat(char);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    // console.log(char);
    count++;
  }
}
console.log(`Given string is : "${mystring}"`);
console.log(`Total number of vowels are : ${count}`);
console.log(
  `========================================================================`
);

function sumOfCube() {
  var sum = 0;
  for (let index = 1; index <= 5; index++) {
    var cube = index * index * index;
    console.log(`Cube of given number ${index} = ${cube} `);
    sum = sum + cube;
  }
  console.log(`Sum of given cube is= ${sum}`);
}
sumOfCube();

console.log(
  `============================================================================`
);

function oddPositionedChars(valueOne) {
  var givenString = "";
  var givenChar = "";
  for (let index = 0; index < valueOne.length; index++) {
    var char = valueOne.charAt(index);
    //    console.log(char);
    givenString = givenString.concat(char);
    if (index % 2 != 0 && char != " ") {
      givenChar = givenChar.concat(char);
    }
  }
  console.log(`Given string is : "${givenString}"`);
  console.log(`Odd positioned characters are : ${givenChar}`);
  console.log(
    `====================================================================`
  );
}

oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");

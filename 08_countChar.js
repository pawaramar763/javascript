function countCharA(stringValue) {
  let checkChar = "aA";
  let myString = " ";
  let count = 0;
  for (let index = 0; index < stringValue.length; index++) {
    var char = stringValue.charAt(index);
    myString = myString.concat(char);
    if (checkChar.includes(char)) {
      count++;
    }
  }
  console.log(`"${myString}"`);
  return count;
}

let returnCount = countCharA(
  "I AM Learning JavaScript, The Language of internet"
);
console.log(`Count of "a" and "A" : ${returnCount}`);
console.log(
  `==========================================================================`
);
returnCount = countCharA("My favourite movie is LAggAn");
console.log(`Count of "a" and "A" : ${returnCount}`);

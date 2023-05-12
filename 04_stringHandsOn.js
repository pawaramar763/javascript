function stringHandsOn() {
  var stringValue = "  Hey you are doing good, keep it up    ";
  console.log("Given String:", stringValue);

  var stringLength = stringValue.length;
  console.log("Length of given string is:", stringLength);

  var trimString = stringValue.trim();
  console.log("After removing extra speces:", trimString);
  console.log("Length of extra removing spaces:", trimString.length);
  var trimStringLength = trimString.length;

  console.log("Total number of extra spaces:", stringLength - trimStringLength);

  var firstChar = trimString.charAt(0);
  var lastChar = trimString.charAt(trimString.length - 1);
  console.log(
    "First character of string:",
    firstChar,
    "-last character of string:",
    lastChar
  );
}
stringHandsOn();

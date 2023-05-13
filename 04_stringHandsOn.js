function stringHandsOn() {
  var stringValue = "  Hey you are doing good, keep it up    ";
  console.log(`1.Given String: ${stringValue}`);

  var stringLength = stringValue.length;
  console.log(`2.Length of given string is: ${stringLength}`);

  var trimString = stringValue.trim();
  console.log(`3.After removing extra speces: ${trimString}`);
  console.log(`  Length after extra removing spaces: ${trimString.length}`);

  var trimStringLength = trimString.length;
  // var totalSpaces = stringLength - trimStringLength;
  console.log(
    `4.Total number of extra spaces: ${stringLength - trimStringLength}`
  );

  var firstChar = trimString.charAt(0);
  var lastChar = trimString.charAt(trimString.length - 1);
  console.log(
    `5.First character of string: =${firstChar} and Last character of string: =${lastChar}`
  );

  var countString = trimString.split(" ");
  console.log(`6.Total words available in string:`, countString.length);

  var searchString = trimString.search("good");
  console.log(`7.The index of "good" is: ${searchString}`);

  var sliceString = trimString.slice(22);
  console.log(`8.Substring starting from index 22 is: ${sliceString}`);

  var endString = trimString.endsWith("up");
  console.log(`9.Is this string ends with "up": ${endString}`);

  var startString = trimString.startsWith("Hey");
  console.log(`10.Is this string starts with "Hey": ${startString}`);
}
stringHandsOn();

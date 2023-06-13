function palindrome(str) {
  let len = str.length;
  for (let index = 0; index < len / 2; index++) {
    // console.log(index);
    // console.log(len-1-index);

    // let char=str.charAt[index];

    if (str[index] != str[len - 1 - index]) {
      console.log(`  ${str}: is not a Palindrome`);
    } else {
      console.log(`  ${str}: is a Palindrome `);
    }
  }
}
palindrome("madam");

palindrome("141");
palindrome("Sunday");
palindrome("mom");
palindrome("listen");
palindrome("dad");

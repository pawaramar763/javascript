console.log(
  `1.With no argument and no return value logged the following message:`
);
let msg = () => {
  console.log(`"Good Morning, Today is Monday"`);
};
msg();

console.log(
  `----------------------------------------------------------------------------`
);

console.log(`2.With 3 args and no return value, multiplication is:`);
let multiplication = (num1, num2, num3 = 1) => {
  console.log(
    `Multiplcation of ${num1} * ${num2} * ${num3} is: ${num1 * num2 * num3}`
  );
};
multiplication(5, 5, 2);
multiplication(10, 4);

console.log(
  `----------------------------------------------------------------------------`
);

console.log(`3.With 5 args and return value, addition is:`);
let addition = (value1, value2, value3, value4, value5) => {
  let sum = value1 + value2 + value3 + value4 + value5;
  return sum;
};
let returnSum = addition(100, 100, 200, 349, 756);
console.log(`Addition of given numbers is : ${returnSum}`);

returnSum = addition("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`Result after concating given strings : ${returnSum}`);

console.log(
  `----------------------------------------------------------------------------`
);

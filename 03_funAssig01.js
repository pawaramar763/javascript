function functionOne() {
  console.log("This is my first function");
}
functionOne();

function functionTwo() {
  console.log("This is my second function");
}
functionTwo();
console.log("==============================================================");

function personalDetails(firstName, lastName, collegeName) {
  console.log("Personal Details-");
  console.log("My name is", firstName, lastName);
  console.log("I have done my graduation from", collegeName);
}
personalDetails("Amar", "Pawar.", "BVDU,Sangli.");
console.log("==============================================================");

function swapValuesDude(valueOne, valueTwo) {
  console.log("Before swap values:", valueOne, valueTwo);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log("After swap values:", valueOne, valueTwo);
}
swapValuesDude("virat", "anushka");
swapValuesDude(1000, 2000);
console.log("==============================================================");

function addThreeValues(argOne, argTwo, argThree) {
  var addition = argOne + argTwo + argThree;
  console.log("addition of given value is:", addition);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello ", "Good ", "Morning");

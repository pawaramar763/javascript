function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for Marriage`
      : `Sorry,${boyName} you are not eligible for Marriage`;
  return result;
}
console.log(`1.Soutions:`);
var returnResult = maleMarriageEligibility("Male", 25, "Billgates");
console.log(returnResult);
returnResult = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(returnResult);
console.log(
  `------------------------------------------------------------------------`
);

function femaleMarriageEligibility(gender, age, girlName) {
  var femaleEligibility =
    gender == "Female" && age >= 18
      ? `Hey ${girlName} you are eligible for Marriage`
      : `Sorry,${girlName} you are not eligible for Marriage`;
  return femaleEligibility;
}
console.log(`2.Solutions:`);
var returnValue = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(returnValue);
returnValue = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(returnValue);
console.log(
  `------------------------------------------------------------------------`
);

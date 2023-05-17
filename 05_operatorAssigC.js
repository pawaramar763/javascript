var tscEligibility = function (gradScore, hscScore, sscScore, candidateName) {
  var result =
    gradScore >= 70 || hscScore >= 80 || sscScore > 90
      ? `Congrates, '${candidateName}' You are eligible for TCS interview.`
      : `Unfortunately, '${candidateName}' You are not eligible for interview.`;
  console.log(result);
};
console.log(`TCS interview eligibility:-`);
tscEligibility(80, 86, 90, "Amar");
tscEligibility(70, 65, 55, "Sagar");
tscEligibility(60, 79, 88, "Vijay");

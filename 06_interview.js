var tcsCriteria = function (gradeScore, hscScore, sscScore, candidateName) {
  if (gradeScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(
      `Congrates ${candidateName}, you are eligible for TCS interview`
    );
  } else {
    console.log(
      `Sorry ${candidateName}, you are not eligible for TCS interview`
    );
  }
};
tcsCriteria(80, 86, 90, "Amar");
tcsCriteria(70, 65, 55, "Pratik");
tcsCriteria(60, 79, 88, "Yash");

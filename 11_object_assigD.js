let professor = {
  name: "Vinod Tawade",
  Department: "Electronics",
  age: 40,
  height: "5.8feet",
  Ismarried: true,

  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
  },

  certificates: [
    "Hacker Rannk Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming",
  ],

  value: function () {
    console.log(
      `4.Professor degree: Engineering in ${this.degrees.engineering} !!`,
      `Total degrees: PHD in ${this.degrees.PHD} and Engineering in ${this.degrees.engineering}`
    );
  },
};
console.log(`1.Properties of the professor:`, professor);
console.log(
  `-------------------------------------------------------------------------------------------------------------------------------------------------------`
);
console.log(`2.Included nested object degrees:`, professor.degrees);
console.log(
  `-------------------------------------------------------------------------------------------------------------------------------------------------------`
);
console.log(`3.Added array`, professor.certificates);
console.log(
  `-------------------------------------------------------------------------------------------------------------------------------------------------------`
);
professor.value();
console.log(
  `-------------------------------------------------------------------------------------------------------------------------------------------------------`
);

let countExperience = (professor.totalExperience = "14 years");
console.log(`5.Added new property total Experience: ${countExperience}`);
console.log(
  `-------------------------------------------------------------------------------------------------------------------------------------------------------`
);

professor.age = "50";
console.log(`6.Modify the age as 40 to 50`, professor);
console.log(
  `-------------------------------------------------------------------------------------------------------------------------------------------------------`
);

professor.certificates.push("Oracle Certified");
console.log(`7.Added new certificate at the end`, professor.certificates);
console.log(
  `-------------------------------------------------------------------------------------------------------------------------------------------------------`
);

let lastElement = professor.certificates[professor.certificates.length - 1];
console.log(`8.Last element of an array certificates:`, lastElement);

let bankSbi = {
  bankName: "State Bank",
  location: "Pune",
  accountNo: 2918548963,
  ifsc: "SB0715823",
};
let bankLocation = {
  street: "JM road",
  city: "Pune",
  pin: 458623,
};

let rateOfInterest = {
  homeLoanInterest: "11.23%",
  personalLoanInterest: "18.42%",
  dueInterest: "10.20%",
};

let sbiDetails = {};

console.log();
`1.Created bankSbi object with properties like...`;
console.table(bankSbi);
console.log(
  `-------------------------------------------------------------------------`
);

console.log(`2.Created bankLocation object with properties like...`);
console.table(bankLocation);
console.log(
  `-------------------------------------------------------------------------`
);

console.log(`3.Clone the bankSbi and bankLocation`);
Object.assign(bankSbi, bankLocation);
console.table(bankSbi);
console.log(
  `-------------------------------------------------------------------------`
);

console.log(`4.Created the rateOfInterest object with properties like...`);
console.log(rateOfInterest);
console.log(
  `-------------------------------------------------------------------------`
);

console.log(`5.Merged the objects like bankSbi,bankLocation,rateOfInterest`);
Object.assign(sbiDetails, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);
console.log(
  `-------------------------------------------------------------------------`
);

console.log(`6.Traverse the merged object`);
for (const keys in sbiDetails) {
  let values = sbiDetails[keys];
  console.log(`${keys}: ${values}`);
}

let sbiBank = {
  bankName: "State Bank",
  location: "Pune",
  accountNo: 2918548963,
  ifsc: "SB0715823",
  interestRate: "8.20%",
  showDetails: function () {
    console.log(
      `Bank Name-${this.bankName}, `,
      `Location-${this.location}, `,
      `Account Number-${this.accountNo}, `,
      `IFSC Code-${this.ifsc}, `,
      `Interest Rate-${this.interestRate}`
    );
  },
};

let axisBank = {
  bankName: "Axis Bank",
  location: "Mumbai",
  accountNo: 2218548753,
  ifsc: "AX07158245",
  interestRate: "9.20%",
  showDetails: function () {
    console.log(
      `Bank Name-${this.bankName}, `,
      `Location-${this.location}, `,
      `Account Number-${this.accountNo}, `,
      `IFSC Code-${this.ifsc}, `,
      `Interest Rate-${this.interestRate}`
    );
  },
};

let hdfc = {
  bankName: "Hdfc Bank",
  location: "Sangli",
  accountNo: 3015948963,
  ifsc: "HD0715893",
  interestRate: "8.50%",
  showDetails: function () {
    console.log(
      `Bank Name-${this.bankName}, `,
      `Location-${this.location}, `,
      `Account Number-${this.accountNo}, `,
      `IFSC Code-${this.ifsc}, `,
      `Interest Rate-${this.interestRate}`
    );
  },
};

let yesBank = {
  bankName: "Yes Bank",
  location: "Kolhapur",
  accountNo: 8918948995,
  ifsc: "YE0715828",
  interestRate: "7.90%",
  showDetails: function () {
    console.log(
      `Bank Name-${this.bankName}, `,
      `Location-${this.location}, `,
      `Account Number-${this.accountNo}, `,
      `IFSC Code-${this.ifsc}, `,
      `Interest Rate-${this.interestRate}`
    );
  },
};
sbiBank.showDetails();
console.log(
  `------------------------------------------------------------------------------------------------------------------`
);
axisBank.showDetails();
console.log(
  `------------------------------------------------------------------------------------------------------------------`
);
hdfc.showDetails();
console.log(
  `------------------------------------------------------------------------------------------------------------------`
);
yesBank.showDetails();

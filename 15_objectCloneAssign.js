const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const shallowClone = arrayNums;
console.log(`1.Original array: [${shallowClone}]`);
shallowClone.push(55, 66);
console.log(`  Cloned array: [${shallowClone}]`);
console.log(
  `------------------------------------------------------------------------------------------------`
);

const deepClone = [...arrayNums];
console.log(`2.Original array: [${deepClone}]`);
arrayNums.push(10, 25);
console.log(`  Added elements at last:[${arrayNums}]`);
console.log(`  Cloned array: [${deepClone}]`);
console.log(
  `------------------------------------------------------------------------------------------------`
);

const arrayEven = [2, 30, 14, 8];
const mergedArray = [...arrayNums, ...arrayEven];
console.log(`3.Conacated both array: [${mergedArray}]`);
console.log(
  `------------------------------------------------------------------------------------------------`
);

const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM Vridavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"],
};

console.log(`5. locality`);
console.log(employee_info.address.locality);
console.log(`5. city, state and country`);
console.log(
  `City is: ${employee_info.address.city}, State is: ${employee_info.address.state}, Country is: ${employee_info.address.country}`
);
console.log(`5.Mobile numbers`);
console.log(`[${employee_info.mobiles}]`);
console.log(
  `------------------------------------------------------------------------------------------------`
);

const deepCloneEmp = JSON.parse(JSON.stringify(employee_info));
console.log(`6.Original value: ${employee_info.salary.july_month}`);
deepCloneEmp.salary.july_month = "80,000INR";
console.log(
  `  Updated value of cloned object: ${deepCloneEmp.salary.july_month}`
);
console.log(`-----------------------------------------------------`);
console.log(
  `6.Original property of an object: ${employee_info.address.country}`
);
employee_info.address.country = "United Kingdom";
console.log(
  ` Updated property of original object: ${employee_info.address.country}`
);
console.log(
  `--------------------------------------------------------------------------------------------------`
);

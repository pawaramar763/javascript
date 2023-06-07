class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`1.All employees from Wipro company`);
let wiproEmp = arrayEmps
  .filter((element) => {
    return element.emp_company == "Wipro";
  })
  .map((employee) => {
    return `Employee Name: ${employee.emp_name} , Company: ${employee.emp_company}`;
  });
console.log(wiproEmp);

console.log(
  `--------------------------------------------------------------------------------------------`
);

console.log(`2.All employees from IT or HR department`);
let itAndHr = arrayEmps
  .filter((employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";
  })
  .map((emp) => {
    return `Employee name: ${emp.emp_name} , Department: ${emp.emp_dept}`;
  });
console.log(itAndHr);

console.log(
  `--------------------------------------------------------------------------------------------`
);

console.log(`3.All employees whose emp id's are greater than 50`);
let idGreaterThan50 = arrayEmps
  .filter((element) => {
    return element.emp_id > 50;
  })
  .map((employee) => {
    return `Employee name: ${employee.emp_name} , Id: ${employee.emp_id}`;
  });
console.log(idGreaterThan50);

console.log(
  `--------------------------------------------------------------------------------------------`
);

console.log(`4.All employees whose name starts with 'A' or 'V' or 'M'`);
let empStartsWith = arrayEmps
  .filter((element) => {
    return (
      element.emp_name.startsWith("A") ||
      element.emp_name.startsWith("V") ||
      element.emp_name.startsWith("M")
    );
  })
  .map((employee) => {
    return `Employee name: ${employee.emp_name}`;
  });
console.log(empStartsWith);

console.log(
  `--------------------------------------------------------------------------------------------`
);

console.log(`5.Average salary for all department:`);

let salary = arrayEmps.map((element) => {
  return element.emp_salary;
});
let sum = salary.reduce((runningTotal, value) => {
  return runningTotal + value;
});
let average = sum / salary.length;
console.log(average);

console.log(
  `--------------------------------------------------------------------------------------------`
);

console.log(`6.Average salary of IT deapartment only:`);
let itDepartment = arrayEmps
  .filter((element) => {
    return element.emp_dept == "IT";
  })
  .map((employee) => {
    return employee.emp_salary;
  });
// console.log(itDepartment);
let sumOfSalary = itDepartment.reduce((runningTotal, value) => {
  return runningTotal + value;
});
// console.log(sumOfSalary);
let averageForDept = sumOfSalary / itDepartment.length;
console.log(averageForDept);

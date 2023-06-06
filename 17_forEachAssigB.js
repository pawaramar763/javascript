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

const empArray = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log(`1.Employees working in TCS`);
empArray.forEach((element) => {
  if (element.emp_company == "TCS") {
    console.log(
      `Employee name: ${element.emp_name}, Company:${element.emp_company}`
    );
  }
});
console.log(
  `---------------------------------------------------------------------------------`
);

console.log(`2.Employees with salary greater than or equal to 50000:`);
empArray.forEach((element) => {
  if (element.emp_salary >= 50000) {
    console.log(
      `Employee id: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`
    );
  }
});
console.log(
  `---------------------------------------------------------------------------------`
);

console.log(`3.Sum of all employees salary:`);
let salarySum = 0;
empArray.forEach((element) => {
  salarySum = salarySum + element.emp_salary;
});
console.log(`Sum of all employees salary is: ${salarySum}`);
console.log(
  `---------------------------------------------------------------------------------`
);

console.log(`4.Find the average salary:`);
let sumOfSalary = 0;
empArray.forEach((element) => {
  sumOfSalary = sumOfSalary + element.emp_salary;
});
let average = sumOfSalary / empArray.length;
console.log(`Average salary is: ${average}`);
console.log(
  `---------------------------------------------------------------------------------`
);

console.log(
  `5.Find the IT or HR department whose salary is greater than or equal to 75000:`
);
let arrayDept = [];
empArray.forEach((element) => {
  if (element.emp_dept == "IT" || element.emp_dept == "HR") {
    arrayDept.push(element);
  }
});
arrayDept.forEach((element) => {
  if (element.emp_salary >= 75000) {
    console.log(
      `Employee id: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`
    );
  }
});

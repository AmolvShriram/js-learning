
class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {

        this.emp_id = emp_id;

        this.emp_name = emp_name;

        this.emp_dept = emp_dept;

        this.emp_salary = emp_salary;

        this.emp_company = emp_company;

    }
    detail(){
        console.log(`Employee Details => Id : ${this.emp_id}, Name : ${this.emp_name}, Dept : ${this.emp_dept}, Salary : ${this.emp_salary}, Company : ${this.emp_company},`);
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50008, "TCS");

const emp_radha = new Employee(33, "Radha", 'HR', 74808, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47080, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75800, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny ,emp_mahi ]

 
console.log(`========================================= Step 1 =======================================`);
console.log(`Employees working in Only 'TCS'  & Log with employee Name and Company Name :: `);
arrayEmployees.forEach(element => {
    if (element.emp_company=="TCS") {
        console.log(`Employee Name : ${element.emp_name}    and     Company Name : ${element.emp_company}`);    
    }
    
});

console.log(`========================================= Step 2 =======================================`);

console.log(`'Finance' Department Employees  & Log with employee Name and Department :: `);
arrayEmployees.forEach(element => {
    if (element.emp_dept=="Finance") {
        console.log(`Employee Name : ${element.emp_name}    and      Dept : ${element.emp_dept}`);    
    }
});
console.log(`========================================= Step 3 =======================================`);

console.log(`Employees whose name Start with 'R'  & Log with full employee Details :: `);
arrayEmployees.forEach(element => {
    if (element.emp_name.startsWith("R")) {
        element.detail();    
    }
});
console.log(`========================================= Step 4 =======================================`);

console.log(`Employees whose Salary is Greater than 75000 & Log with full employee Name, employee Company Name & Salary :: `);
arrayEmployees.forEach(element => {
    if (element.emp_salary > 75000) {
        console.log(`Employee Name : ${element.emp_name}      Company Name : ${element.emp_dept}    Salary : ${element.emp_salary}`);    

    }
});
console.log(`========================================= Step 5 =======================================`);

console.log(`Employees whose Salary is Greater than or equal to 50000 & Log with full employee Details :: `);
arrayEmployees.forEach(element => {
    if (element.emp_salary >= 50000 && element.emp_dept =="IT") {
        element.detail();    

    }
});
console.log(`========================================= Step 6 =======================================`);

console.log(`Employees working in Only 'Infy'  & Log with full employee Details :: `);
arrayEmployees.forEach(element => {
    if (element.emp_company == "Infy") {
        element.detail();    

    }
});
console.log(`========================================= ####### =======================================`);

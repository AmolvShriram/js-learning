
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
console.log(`All the Employees from 'Wipro' Company ::`);
const arrayNew =arrayEmployees.filter( (currentValue)=>{
    return currentValue.emp_company=="Wipro";
} );

arrayNew.forEach( (element)=>{
    element.detail();
} );

console.log(`========================================= Step 2 =======================================`);

console.log(`All the Employees from 'IT' OR  'HR' Department ::`);
const array =arrayEmployees.filter( (currentValue)=>{
    return currentValue.emp_dept=="IT" || currentValue.emp_dept == "HR";
} );

array.forEach( (element)=>{

    element.detail();
} );

console.log(`========================================= Step 3 =======================================`);

console.log(`Employees whose emp id's are Greater than 50 ::`);
const array1 =arrayEmployees.filter( (currentValue)=>{
    return currentValue.emp_dept=="IT" || currentValue.emp_dept == "HR";
} );

array1.forEach( (element)=>{

    element.detail();
} );

console.log(`========================================= Step 4 =======================================`);

console.log(`All the Employees whose names start with letter 'A' or 'V' or 'M'  ::`);
const array2 =arrayEmployees.filter( (currentValue)=>{
    return currentValue.emp_name.startsWith("A") || currentValue.emp_name.startsWith("V") || currentValue.emp_name.startsWith("M");
} );

array2.forEach( (element)=>{

    element.detail();
} );

console.log(`========================================= Step 5 =======================================`);

const newArray1 = arrayEmployees.filter((emp)=>{
    return emp.emp_dept;
});

const sumSalary1 = newArray1.reduce( (runningTotal, currentValue)=>{
    return runningTotal + currentValue.emp_salary;
}, 0 );
console.log(`Total Salary of the employee for all Department : ${sumSalary1}`);
console.log(`Average Salary of the employee for all Department : ${sumSalary1/newArray1.length}`);

console.log(`========================================= Step 6 =======================================`);

const newArray = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumSalary = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal + currentValue.emp_salary;
}, 0 );
console.log(`Total salary from IT department : ${sumSalary}`);
console.log(`Average salary from IT department : ${sumSalary/newArray.length}`);

console.log(`========================================= ###### =======================================`);

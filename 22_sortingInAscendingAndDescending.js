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

console.log(`================================== Step 1 ====================================`);

console.log(` Sort the 'arrayEmployees' in  Descending order of Employee Id's :`);
console.log(` Employee Details :>  Id , Name and Department = `);
arrayEmployees.sort((p1, p2)=>{
    return p1.id>=p2.id ? 1 : -1
});

arrayEmployees.forEach(element => {
    console.log(`   Id : ${element.emp_id} ,     Name : ${element.emp_name} ,     Department : ${element.emp_dept}`);
});

console.log(`================================== Step 2 ====================================`);

console.log(` Sort the 'arrayEmployees' in  Ascending order of Employee Department :`);
console.log(` Employee Details :>  Department , Id , and Company = `);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_dept>=p2.emp_dept ? 1 : -1
});

arrayEmployees.forEach(element => {
    console.log(`   Department : ${element.emp_dept} ,         Id : ${element.emp_id} ,         Company : ${element.emp_company}`);
});


console.log(`================================== Step 3 ====================================`);

console.log(` Sort the 'arrayEmployees' in  Descending order of Employee Salary :`);
console.log(` Employee Details :>  Salary , Name and Company = `);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_salary>=p2.emp_salary ? -1 : 1
});

arrayEmployees.forEach(element => {
    console.log(`   Salary : ${element.emp_salary} ,     Name : ${element.emp_name} ,        Company : ${element.emp_company}`);

});

console.log(`================================== ####### ====================================`);

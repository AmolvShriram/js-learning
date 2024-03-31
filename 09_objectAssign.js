console.log(`1. Think of all the properties that you could add (Add minimum 5 properties)`);
console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`2. Also include nested object 'degrees' like engineering: "CSC, PHD: "Adv Computing and few more.`);
console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`3. Also add one array --> 'certificates' with his certificates like 'Hacker Rank Participation', 'Certificate in IFC course, ce in Adv Programming `);
console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);

const professor = {
    name : "Amol",
    department : "IT",
    subject : "JavaScript",
    college : "COEP",
    age : 35,
    Salary : 100000,
    degree : {
        graduation_engineering : " BE-CSE",
        post_graduation : "MTech",
        phd : "Advance Computing",
    },
    certificates : ['Hacker Rank Participation', 'Certificate in IFE Course', 'Certificate in Advance Programming']
}
console.log(professor);

console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`4. Try to add new Property like totalExperience = "14 years" :`);
professor.totalExperience = "14 years"
console.log(professor);

console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`5. Add one new certificate " Oracle Certified" :`);
professor.certificates.splice(52, 0,"Oracle Certified")
console.log(professor);

console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`6. last element of Array : `);
let len = professor.certificates.length;
console.log(professor.certificates[len-1]);

console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(` 7. Complete Object `);
console.log(professor);

console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`8. Traverse Array using for of Loop : `);
for (let index = 0; index < professor.certificates.length; index++) {
    const element = professor.certificates[index];
    result = element;
    console.log(result);
}
console.log(`===============================================================================================================================================================`);

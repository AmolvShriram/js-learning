const employeeJSON = `
{
        "name": "Aleix Melon",
        "id": "E00245",
        "role": ["Dev", "DBA"],
        "age": 23,
        "doj": "11-12-2019",
        "married": false,   
        "address": 
        {
         "street": "32, Laham St.",
         "city": "Innsbruck",
         "country": "Austria"
        },
        "referred-by": "E0012"
    
    }    
`;

console.log(`=========================== Convert JSON to Object ============================`);
const employeeObject = JSON.parse(employeeJSON);
console.log(employeeObject);

console.log(`-------------------------------------------------------------------------------`);

const len = employeeObject.role.length;
const result1 = employeeObject.role[0]
console.log(` First Element of Array Role : "${result1}"`);

console.log(`-------------------------------------------------------------------------------`);

const result2 = employeeObject.name.slice(5, 11);
console.log(` Last Element of String Name : "${result2}"`);

console.log(`-------------------------------------------------------------------------------`);

const result3 = employeeObject.doj.slice(6, 10);
console.log(` Last Element of String DOJ : '${result3}'`);
console.log(`-------------------------------------------------------------------------------`);
console.log(`===============================================================================`);

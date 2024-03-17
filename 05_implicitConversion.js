// Numeric String used with + (Operator) Gives String type.
console.log(`====== Numeric String / Implicit conversion to string =======`);
 
var result;

result = '3' + 2;
console.log(` Result of '3'+ 2 is : " ${result} "`); 
console.log("-------------------------------------------------------------");

result = '3' + true;
console.log(` Result of '3'+ true is : " ${result} "`); 
console.log("-------------------------------------------------------------");

result = '3' + undefined ;
console.log(` Result of '3'+ undefined is : " ${result} "`); 
console.log("-------------------------------------------------------------");

result = '3' + null;
console.log(` Result of '3'+ null is : " ${result} "`); 
console.log("-------------------------------------------------------------");

console.log(`========== Implicit Boolean Conversion to number ============`);

// If boolean is used , true is 1, false is 0,

var result;

result = '4' - true;
console.log(` Result of '4' - true is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = 4 + true;
console.log(` Result of 4 + true is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = 4 + false;
console.log(` Result of 4 + false is :  ${result} `); 
console.log("-------------------------------------------------------------");

console.log(`=========== Implicit string Conversion to number ============`);

// Numeric string used with - , / , * result number type

var result;

result = '4' - '2';
console.log(` Result of '4' - '2' is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = '4' - 2;
console.log(` Result of '4' - 2 is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = '4' * 2;
console.log(` Result of '4' * 2 is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = '4' / 2;
console.log(` Result of '4' / 2 is :  ${result} `); 
console.log("-------------------------------------------------------------");

console.log(`=== Undefined used with number, boolean or null given NaN ===`);

// Arithmetic operation of undefined with Number, Boolean or Null gives NaN
var result;

result = 4 + undefined;
console.log(` Result of 4 + undefined is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = 4 - undefined;
console.log(` Result of 4 - undefined is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = true + undefined;
console.log(` Result of true + undefined is :  ${result} `); 
console.log("-------------------------------------------------------------");

result = null + undefined;
console.log(` Result of null + undefined is :  ${result} `); 
console.log("-------------------------------------------------------------");



console.log(`====== Number Strings and boolean values Explicit conversion to Numbers =======`);
// In that case we can use Number();

console.log(`============================  String to Number ================================`);

var result;

result = Number('324');
console.log(`Result of String '324' to number : ${result}`);
console.log(`-----------------------------------------------------------------------------`);

result = Number('324e-1');
console.log(`Result of String '324e-1' to number : ${result}`);
console.log(`-----------------------------------------------------------------------------`);

console.log(`============================  Boolean to Number ================================`);

result = Number(true);
console.log(`Result of Boolean true to number : ${result}`);
console.log(`-----------------------------------------------------------------------------`);

result = Number(false);
console.log(`Result of Boolean false to number : ${result}`);
console.log(`-----------------------------------------------------------------------------`);


console.log(`=================== Invalid String to Number return NaN =====================`);
// If a String is an Invalid Number, the result will be NaN  
var result;

result = Number('Hello');
console.log(`Result of Invalid String Hello to number : ${result}`);
console.log(`-----------------------------------------------------------------------------`);

result = Number(undefined);
console.log(`Result of Invalid String undefined to number : ${result}`);
console.log(`-----------------------------------------------------------------------------`);

result = Number(NaN);
console.log(`Result of Invalid String NaN to number : ${result}`);

console.log(`=================================== ###### ==================================`);

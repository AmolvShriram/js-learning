const array = [3, 9, 7, 6, 19, 29, 53];

function isPrime(num){
   for (let index = 2; index < num; index++) {
     if (num%index==0) {
      return false;
     } 
   }
   return true;
  }

let count =0;
let result = false;
for (const iterator of array) {
   result = isPrime(iterator);
   if (result==true) {
      count++;
      
   }
}
console.log(`Total Prime Number Count of Array : ${count}`);

console.log(`---------------------------------------------------------------------------------------`);

function spaceCount(sentence) {
   var words = sentence.split(" ");
   var totalWords = words.length;
   var spaces = totalWords-1;
   return spaces
}
const value = spaceCount("Revision is the mother of Success");
console.log(`Total number of Space available in "Revision is the mother of Success" : ${value}`);

console.log(`---------------------------------------------------------------------------------------`);

const value1 = spaceCount("JavaScript is the language of internet world");
console.log(`Total number of Space available in "JavaScript is the language of internet world" : ${value1}`);
console.log(`---------------------------------------------------------------------------------------`);
console.log(`=======================================================================================`);
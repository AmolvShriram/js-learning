const fruits_seasonal = [" Banana", " Orange", " Apple", " Mango", " Water Melon" ];
console.log(`Given Array : [${fruits_seasonal}]`);
console.log(`=========================================== Step 1 ===========================================`);
console.log(` First Element of Array ::  ${fruits_seasonal[0]}`);
// var charAt0 = fruits_seasonal.charAt(0);
// console.log("Character at index 0 is: ", charAt0);
console.log(`----------------------------------------------------------------------------------------------`);
const len = fruits_seasonal.length;
console.log(` Last Element of Array ::  ${fruits_seasonal[len-1]} `);

console.log(`=========================================== Step 2 ===========================================`);

console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(` Adding element 'Papaya' before the element 'Banana' :: `);
console.log(fruits_seasonal);

console.log(`=========================================== Step 3 ===========================================`);

console.log(fruits_seasonal);
console.log(` Remove element 'Mango' from the Array :: `);
const deleteElements = fruits_seasonal.splice(4, 1);
console.log(deleteElements);
console.log(fruits_seasonal);

console.log(`=========================================== Step 4 ===========================================`);

console.log(fruits_seasonal);
console.log(` Adding or Inserting element "Pineapple" at the Last Position ::`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`=========================================== Step 5 ===========================================`);

console.log(fruits_seasonal);
console.log(` Inserting an element " Dragon Fruit" before Water Melon :: `);
fruits_seasonal.splice(4, 0, " Dragon Fruit")
console.log(fruits_seasonal);

console.log(`=========================================== Step 6 ===========================================`);

console.log(fruits_seasonal);
console.log(`Replacing an element ' Orange ' with 'KiWi' ::`);
const deleteElement = fruits_seasonal.splice(2, 1, " KiWi");
console.log(deleteElement);
console.log(fruits_seasonal);

console.log(`=========================================== Step 7 ===========================================`);

console.log(fruits_seasonal);
const array = fruits_seasonal.slice(1, 5);
console.log(array);

console.log(`=========================================== Step 8 ===========================================`);

console.log(fruits_seasonal);
const lent = fruits_seasonal.length;
console.log(`Only Last 3 Element of the Array ::  [${fruits_seasonal[lent-1]}, ${fruits_seasonal[lent-2]}, ${fruits_seasonal[lent-3]}] `);

console.log(`=========================================== ####***#### ======================================`);

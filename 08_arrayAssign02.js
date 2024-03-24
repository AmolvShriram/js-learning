console.log(`============================================== Step 1 ==============================================`);
const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given ARRAY :: [ ${arrayNumbers}]`);
console.log(`----------------------------------------------------------------------------------------------------`);
var len = arrayNumbers.length;
console.log(`   The Total Elements of Array :: ${len}`);

console.log(`============================================== Step 2 ==============================================`);

console.log(`   First Element of Array ::  ${arrayNumbers[0]}`);
console.log(`----------------------------------------------------------------------------------------------------`);
console.log(`   Last Element of Array ::  ${arrayNumbers[len-1]}`);

console.log(`============================================== Step 3 ==============================================`);

console.log(`   Third last Element of Array ::  ${arrayNumbers[len-3]}`);

console.log(`============================================== Step 4 ==============================================`);

// console.log(`Even Numbers of the Array ::`);
// for (let index = 0; index < arrayNumbers.length; index++) {
//     if (arrayNumbers[index]%2==0  ) {
//         console.log(` ${arrayNumbers[index]}`);

//     } 
// }

var evenNumbersString = "";
for (var evenum of arrayNumbers) {
  if (evenum % 2 === 0) {
    evenNumbersString += evenum + " ";
  }
}
console.log(`   Even Numbers of Array :: [${evenNumbersString}]`);

console.log(`============================================== Step 5 ==============================================`);

// console.log(`Odd Numbers of the Array ::`);
// for (let index = 0; index < arrayNumbers.length; index++) {
//     if (arrayNumbers[index]%2!=0  ) {
//         console.log(` ${arrayNumbers[index]}`);

//     } 
// }

var oddNumbersString = "";
for (var oddnum of arrayNumbers) {
  if (oddnum % 2 !== 0) {
    oddNumbersString += oddnum + " ";
  }
}
console.log(`   Odd Numbers of Array :: [${oddNumbersString}]`);


console.log(`============================================== Step 6 ==============================================`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        sum = sum + element;
    }   
}
console.log(`   Sum of an all Even element of array is: ${sum}`);

console.log(`============================================== Step 7 ==============================================`);
let add = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2!=0) {
        const element = arrayNumbers[index];
        add = add + element;
    }   
}
console.log(`   Sum of an all Odd element of array is :: ${add}`);

console.log(`============================================== Step 8 ==============================================`);

let sum1 = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];  
    sum1 = sum1 + element;
}
console.log(`   Sum of all elements of array is :: ${sum1}`);

console.log(`============================================== Step 9 ==============================================`);

// console.log(`5 Multiple Numbers of the Array ::`);
// for (let index = 0; index < arrayNumbers.length; index++) {
//     if (arrayNumbers[index]%5==0  ) {
//         console.log(` ${arrayNumbers[index]}`);

//     } 
// }


var NumbersString = "";
for (var element of arrayNumbers) {
  if (element % 5 === 0) {
    NumbersString += element + " ";
  }
}
console.log(`   5 Multiple Numbers of the Array  :: [${NumbersString}]`);


console.log(`============================================== Step 10 =============================================`);

console.log(`   Given ARRAY :: [ ${arrayNumbers}]`);
console.log(`   Is number 115 is available in Array ::  ${arrayNumbers.includes(115)}`);

console.log(`============================================== Step 11 =============================================`);

console.log(`   Given ARRAY :: [ ${arrayNumbers}]`);
console.log(`   Is number 23 is available in Array ::  ${arrayNumbers.includes(23)}`);

console.log(`============================================== Step 12 =============================================`);

console.log(`   Given ARRAY :: [ ${arrayNumbers}]`);
arrayNumbers.splice(3, 0, 55, 66)
console.log(`   Inserting Numbers 55 & 66 at index 3 :: [${arrayNumbers}]`);

console.log(`============================================== Step 13 =============================================`);

console.log(`   Given ARRAY :: [ ${arrayNumbers}]`);
// const lent = arrayNumbers.length;
// console.log(`Deleted Elements :: [${arrayNumbers[4]}, ${arrayNumbers[5]}, ${arrayNumbers[6]}]`);
// console.log(`Delete 3 Elements starting from index 4 of the Array ::  [${arrayNumbers[0]}, ${arrayNumbers[1]}, ${arrayNumbers[2]}, ${arrayNumbers[3]}, ${arrayNumbers[lent-6]}, ${arrayNumbers[lent-5]}, ${arrayNumbers[lent-4]}, ${arrayNumbers[lent-3]}, ${arrayNumbers[lent-2]}, ${arrayNumbers[lent-1]}] `);
const deleteElement = arrayNumbers.splice(4, 3);
console.log(`   Deleted Elements :: [${deleteElement}]`);
console.log(`   After Deleting 3 Elements starting from index 4 of the Array :: [${arrayNumbers}]`);

console.log(`============================================== ####### =============================================`);

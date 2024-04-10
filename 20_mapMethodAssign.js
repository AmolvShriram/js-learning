const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 9];

console.log(`================================= Step 1 =================================`);

const arrayNew = arrayNumbers.map( (currentValue)=>{
    return currentValue+10;
} );

console.log(arrayNumbers);
console.log(`Adding 10 into each element of array =>`);
console.log(arrayNew);


console.log(`================================= Step 2 =================================`);

const arrayCube = arrayNumbers.map( (currentValue)=>{
    return currentValue * currentValue * currentValue;
} );
console.log(arrayCube);

console.log(`================================= Step 3 =================================`);

const array = arrayNumbers.map( (currentValue,index)=>{
    return currentValue + index; 
} );

console.log(arrayNumbers);
console.log(`Adding index value of each element into itself-element  of array =>`);
console.log(array);
console.log(`================================= ####### =================================`);

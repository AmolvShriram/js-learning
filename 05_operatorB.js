console.log("==============================## Steps ## ===========================");

function greaterNumber(a,b ) {

    var result = a>b ? ` true => ${a} greater than  ${b} ` : `false =>  ${a} less than ${b}`;
    console.log(`Relation between ${a} and ${b} is : ${result} `);
}
greaterNumber(10,-10);
greaterNumber(899,800); 

console.log("================================ Step-1 =============================");

// function isEvenOrOdd(a) {
//     var result = a % 2 === 0 ? `true = Even` : `false = Odd`;
//     console.log(`Argument : ${a}`);
//     return result;
// }
// var returnValue = isEvenOrOdd(29);
// console.log(` Given Number ${a} is : ${returnValue}`);

// var returnValue = isEvenOrOdd(44);
// console.log(` Given Number ${a} is : ${returnValue}`);

// var returnValue = isEvenOrOdd(0);
// console.log(` Given Number ${a} is : ${returnValue}`);

// var returnValue = isEvenOrOdd(101);
// console.log(` Given Number ${a} is : ${returnValue}`);

function isEvenOrOdd(a) {
    var result =  a % 2 === 0 ? `true => "Even"` : `false => "Odd"`;
    console.log(` Given Number ${a} is : ${result}`);

}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log("================================ Step-2 ==============================");

function wordLength(a) {
    
    // var str = a;
    console.log(`Length of Given Word ${a} : ${a.length}`);
    var result = a.length % 2 === 0 ? "Even" :" Odd" ;
    console.log(`Given word ${a} length : ${result}`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");

console.log("==============================## Step-3 ## ============================");

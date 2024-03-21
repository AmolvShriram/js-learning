console.log(`======================================================== Step 1 ==========================================================`);
const word = " I am very good IT Developer "
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index); 
    let lowerCase = char.toLowerCase(); 
    if (vowels.includes(lowerCase)) {
        vowelsCount++;
    }   
}
console.log(`Total Number of vowels in String : ${vowelsCount}`);

console.log(`======================================================== Step 2 ==========================================================`);
let totalCount = 0;
for (let index = 0; index <= 5; index++) {
    totalCount = totalCount + index*index*index ;
    // totalCount = result++;
    // console.log(result);
}
console.log(` Sum of Cube : ${totalCount}`);

console.log(`======================================================== Step 3 ==========================================================`);

let result ="";
function oddPositionedChars(word) {
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index %2!= 0 && element != " ") {
            
            result += element + "    ";
        }
    }
}
oddPositionedChars("Hard Work always pays back");
console.log(` Odd Positioned Characters in String "Hard Work always pays back" :  ${result}`);


console.log(`======================================================== Step 4 ==========================================================`);

var total = "";
function oddPositionedChar(word) {
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index %2!= 0 && element != " ") {
            total += element +"   ";
        }
    }
}
oddPositionedChar("Soon I will be UI IT Champ");
console.log(` Odd Positioned Characters in String "Soon I will be UI IT Champ" :  ${total}`);
console.log("====================================== Step 1 ==============================================");
function squareOfWordLength(a1) {
    // console.log(`Word / String "JavaScript": ${a1}`);
    var result = a1.length;
    console.log(`length of Word / String "JavaScript" : ${result}`);
     var result1 = result*result;
    console.log(`Square of length of Word / String "JavaScript" =  ${result1}`);
     
    console.log("------------------------------------- Step 1.1 ---------------------------------------------");
    var b1 = " Google Chrome ";
    // console.log(`Word / String " Google Chrome": ${b1}`);
    var result = b1.length;
    console.log(`length of Word / String " Google Chrome" : ${result}`);
    var result1 = result*result;
    console.log(`Square of length of Word / String " Google Chrome" =  ${result1}`);

    console.log("------------------------------------- Step 1.2 ---------------------------------------------");
    var c1 = " Developer Smart ";
    // console.log(`Length of Word / String " Developer Smart ": ${c1}`);
    var result = c1.length;
    console.log(`length of Word / String " Developer Smart " : ${result}`);
    var result1 = result*result;
    console.log(`Square of length of Word / String " Developer Smart " =  ${result1}`);
    
    // console.log("------------------------------------- Step 1.3 ---------------------------------------------");
}
squareOfWordLength("JavaScript");
squareOfWordLength(" Google Chrome");
squareOfWordLength("JavaScript");

console.log("========================================== Step 2 ===========================================");
function string(){
    var str = "I am Angular Developer";
    var result = str.length
    console.log(`Length of String "I am Angular Developer": =  ${result}`);
    console.log("--------------------------------------- ***  -----------------------------------------------");

    var resultValue = str.split(" ")
    console.log(resultValue);
    console.log(`Total words in String "I am Angular Developer" : ${resultValue.length}`);
    var result1 = result*resultValue.length;
    console.log(`Result after multiplied by total words available in String to String length :  ${result1}`);
    
    console.log("------------------------------------- Step 2.1 ---------------------------------------------");
    var result2 = result/resultValue.length;
    console.log(`Result after Divided by total words available in String to String length :  ${result2}`);

}
string()
console.log("======================================= ####### ============================================");


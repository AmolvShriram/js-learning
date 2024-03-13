console.log("==================================== #####  ===================================");
function stringHandsOn() {
}
stringHandsOn()
    console.log(`   "   Hey you are doing good, keep it up   "   `);
    console.log("==================================== Step 1 ===================================");
    var str = "   Hey you are doing good, keep it up   ";
    var len = str.length;
    console.log(` Length of string = ${str.length}`);
    console.log("==================================== Step 2 ===================================");

    var str = "   Hey you are doing good, keep it up   ";
    var strBeforeTrim = str;
    var lengthBeforeTrim = strBeforeTrim.length
    // console.log(` ${ str} It's length is : ${lengthBeforeTrim}`);
    
    var strAfterTrim = str.trim();
    var lengthAfterTrim = strAfterTrim.length;
    // console.log(` ${strAfterTrim} It's length is : ${lengthAfterTrim} `);
    console.log(`The length of String after removing the spaces = ${lengthAfterTrim}`);

    console.log("==================================== Step 3 ===================================");
    console.log(`Total spaces removed is : ${lengthBeforeTrim-lengthAfterTrim}`);
    
    console.log("==================================== Step 4 ===================================");
    var charAt0 = strAfterTrim.charAt(0)
    console.log(`First Character is:  ${charAt0}`);
    var totalChars = strAfterTrim.length;
    var lastChar = strAfterTrim.charAt(totalChars-1);
    console.log(`Last Character is: ${lastChar}`);


    console.log("==================================== Step 5 ===================================");
    // var totalWords = stringHandsOn(" Hey you are doing good, keep it up ");
    // console.log(`Total number of words is: ${totalWords}`);
    var resultValue = strAfterTrim.split(" ")
    console.log(resultValue);
    console.log(`Total words are: ${resultValue.length}`);

    console.log("==================================== Step 6 ===================================");
    var str = "   Hey you are doing good, keep it up   ";
    var indexOfGood = str.indexOf('good');
    console.log(`Index of char Good is:  ${indexOfGood}`);

    console.log("==================================== Step 7 ===================================");
    var str = "   Hey you are doing good, keep it up   ";
    console.log(str.substring(22,)); 

    console.log("==================================== Step 8 ===================================");
     var str = strAfterTrim;

    // var result = str.startWith("Hey");
    var startWithResult = str.startsWith("Hey");  
    console.log(`Is string Starts with word Hey : ${startWithResult}`);

    console.log("==================================== Step 9 ===================================");
    var str = strAfterTrim
    var endWithResult = str.endsWith("up");
    console.log(`Is string Ends with word Up : ${endWithResult}`);

    console.log("==================================== ****** ===================================");


    



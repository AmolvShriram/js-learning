console.log(`================================================ Step 1 ==========================================================`);

let show = () => {

    console.log(`" Good Morning, Today is Monday "`);

}

show();

console.log(`================================================= Step 2 ==========================================================`);

let multi = (n1, n2, n3 = 1 ) => {

    console.log(` Multiplication of ${n1}, ${n2}, ${n3}, : ${n1*n2*n3}`);

}

multi(5, 5, 2);
multi(10, 4);

console.log(`================================================= Step 3 ==========================================================`);

let add = (n1, n2, n3, n4, n5 ) => {

    let result = n1 + n2 + n3 + n4 + n5;
  
    return result;
  
  }
  
  let additionResult = add (100, 100, 200, 349, 756);
  
  console.log(` Addition of 100, 100, 200, 349 and 756 ::> ${additionResult}`);

  console.log(`-------------------------------------------------------------------------------------------------------------------`);

  let additionResult1 = add(" I am ","learning ", "ES6 ", "features ","in depth." );
  
  console.log(` Addition of  " I am "," learning ", " ES6 ", " features "," in depth " ::>> ${additionResult1}`);

console.log(`================================================ ####### ==========================================================`);

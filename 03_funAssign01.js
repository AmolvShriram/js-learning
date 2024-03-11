
console.log("======================*****==========================");
function show(){
    console.log("Nation Before Self");
    console.log("---------------------------------------------------");
    console.log(" Success Runs Behind Excellence");
}
show();
console.log("====================== Step 1=========================");

function personalDetails(firstName, lastName, collegeName){
    console.log(" First Name :>", firstName);
    console.log(" Last Name :>", lastName);
    console.log(" College Name :>", collegeName);
}
personalDetails( "Amol", "Shriram", " KBP College Pandharpur");

console.log("====================== Step 2.1 =========================");

function swapValues(firstName,lastName){
    console.log("------------------- Before Swap --------------------");
    console.log(" FirstName :>",firstName);
    console.log(" LastName :>", lastName);
    console.log("------------------- After Swap ---------------------");
    var temp = firstName;
    firstName = lastName;
    lastName = temp;
    console.log(" FirstName :>",firstName);
    console.log(" LastName :>", lastName);
}
swapValues( " Virat", " Kohali ",);

console.log("====================== Step 2.2 =========================");

function swapValues(n1,n2){
    console.log("------------------- Before Swap --------------------");
    console.log(" N1 =", n1);
    console.log(" N2 =", n2);

    console.log("------------------- After Swap ---------------------");
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(" N1 =", n1);
    console.log(" N2 =", n2);
}
swapValues(1000, 2000);

console.log("====================== Step 3.1 =========================");

function addThreeValues(n1,n2,n3){
    console.log(" N1 =:", n1, "N2 =", n2, " N3 =", n3);
    var result = n1+n2+n3;
    console.log(" Addition Result =", result);
}
addThreeValues( 10.23, 600, 40);

console.log("====================== Step 3.2 =========================");

function addThreeValues(a, v, s){
    console.log(" A =", a, " V =", v, " S =", s);
    var result = a+v+s;
    console.log(" Addition Result =", result);
}
addThreeValues(" Hello", " Good", " Morning");

console.log("======================*****==========================");

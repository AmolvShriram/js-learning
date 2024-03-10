var sweety = "sweety";
console.log(" ------------- before swap -----------------");
console.log(" Sweety :>", sweety);
var typeofsweety = typeof sweety;
console.log(" Data type of sweety :>", typeofsweety);
var cutie = " cutie";
console.log(" cutie :>", cutie);
var typeofcutie = typeof cutie;
console.log(" Data type of cutie :>", typeofcutie);
console.log(" ------------- after swap ------------------");
var temp = "sweety";
sweety = cutie;
cutie = temp;
console.log("sweety :>", sweety);
var typeofsweety = typeof sweety;
console.log("Data type of sweety :>", typeofsweety);
console.log("cutie :>", cutie);
var typeofcutie = typeof cutie;
console.log("Data type of cutie  :>", typeofcutie);


console.log("=================== step 1 ==================");
var n1, n2, n3;
console.log(" ------------- before swap -----------------");
n1 = 100;
n2 = 200; 
n3 = 300;
console.log("n1 :>", n1, "n2:>",n2, "n3:>",n3);
var typeofn1 = typeof n1;
console.log(" Data type of n1 :>", typeofn1);
var typeofn2 = typeof n2;
console.log(" Data type of n2 :>", typeofn2);
var typeofn3 = typeof n3;
console.log(" Data type of n3 :>", typeofn3);

console.log(" ------------- after swap ------------------");
var temp = n1
n1 = n2 ;
n2 = temp;
console.log("n1 :>", n1,);
var temp = n2;
n2=n3;
n3=temp;
console.log("n2:>",n2,);
var temp = n3;
n1 = n3;
n3 = temp;
console.log("n3:>",n3);






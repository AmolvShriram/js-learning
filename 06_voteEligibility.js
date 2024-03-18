console.log(`============================ ### ==============================`);

var voteEligible = function(age){
    if (age<= 0 && age == -age ) {
        console.log(` Invalid Input Data : ${age}`);
        console.log(`---------------------------------------------------------------`);

    } else {
        if (age < 18 && age > 0 ) {
            console.log(`Not Eligible for Vote : ${age}`);
            console.log(`---------------------------------------------------------------`);

        } else {
            if (age >= 18 && age < 100 ) {
            console.log(`Eligible for Vote : ${age}`);
            console.log(`---------------------------------------------------------------`);

            } else  {
                console.log(` Invalid Input Data : ${age}`);
                console.log(`---------------------------------------------------------------`);

                
            }
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
console.log(`============================ ### ==============================`);

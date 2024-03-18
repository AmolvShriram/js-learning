function gradeCalculation(marks) {
    if (marks <=0 || marks >100 || isNaN(+marks) ) {
        console.log(`Please Provide the Valid Marks : ${marks}`);
        console.log(`---------------------------------------------------------------`);

    } else {
        if (marks >= 35 && marks < 50) {
            console.log(`   Average Marks : ${marks}   Grade : C ,  Need Improvement `);
            console.log(`---------------------------------------------------------------`);
        } else {
            if (marks >= 50 && marks < 75) {
                console.log(`      Good Marks : ${marks}   Grade : B `);
                console.log(`---------------------------------------------------------------`);

            } else {
                if (marks >= 75 && marks < 90) {
                    console.log(` Excellent Marks : ${marks}   Grade : A `);
                    console.log(`---------------------------------------------------------------`);

                } else {
                    if (marks >= 90 && marks <=100) {
                        console.log(` Fantastic Marks : ${marks}   Grade : A+ `);
                        console.log(`---------------------------------------------------------------`);

                    } else {
                        // console.log(` Invalid Input`);
                    }
             }   
            }
        }   
    }
}
console.log(`============================ ### ==============================`);
gradeCalculation(98);
gradeCalculation("91");
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(35);
gradeCalculation(49);

gradeCalculation(0);
gradeCalculation(-7);
gradeCalculation(150);
gradeCalculation("Eighty");
gradeCalculation("undefined");
gradeCalculation(null);

console.log(`============================ ### ==============================`);

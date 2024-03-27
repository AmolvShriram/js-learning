function factorialOfNum(num) {
    let fact = 1;
    if (num == null && num == undefined ) {
        console.log(`Invalid Input :: ${num}`);
    } else {
        for (let index = num; index >=1; index--) {
            fact = fact * index;
            
        }
        console.log(`Factorial of ${num} :: ${fact}`);
    }
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
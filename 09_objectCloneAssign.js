console.log(`===== 1. Object "bankSbi" with 4 literals ====`);

const bankSbi = {
    AccountType :     "Saving",
    creditedAmount :  100000,
    debitedAmount :   50000,
    RateOfInterest :  7,

}
console.table(bankSbi);

console.log(`==== 2. Object "bankLocation" with 3 literals ====`);

const bankLocation = {
    street : "Station Road",
    city :   "Pandharpur",
    pin :     413304,
}
console.table(bankLocation);

console.log(`==== 3. Cloning Object BankSbi and BankLocation ==== `);

const cloneObject = Object.assign( bankSbi, bankLocation);
console.table(cloneObject);

console.log(`==== 4. Object "RateOfInterest" with 3 literals ====`);

const rateOfInterest={
    homeLoanInterest :      7.5,
    personalLoanInterest :  8,
    dueInterest :           9,
}
console.table(rateOfInterest);

console.log(`==== 5. Merging Object BankSbi, BankLocation and RateOfInterest ==== `);

const sbiDetails = Object.assign({},bankSbi, bankLocation, rateOfInterest)
console.table(sbiDetails);

console.log(`==== 6. Traversing the Merged Object "RateOfInterest" by using for in loop ==== `);

for (const key in sbiDetails) {
    console.log(`${key} => ${sbiDetails[key]}`);
}
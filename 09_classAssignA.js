
console.log(`==================== Step 1 ===========================`);
class Vehicle {
    constructor(name,outputpower, speed, price, launched ){
        this.name = name;
        this.outputpower = outputpower;
        this.speed = speed;
        this.price = price;
        this.launched = launched;
    }
    details(){
        console.log(`Vehicle Details => `)
        console.log(`   Name :         ${this.name}`)
        console.log(`   OutputPower :  ${this.outputpower}`) 
        console.log(`   Speed :        ${this.speed}`)
        console.log(`   Price :        ${this.price}`)
        console.log(`   Launched :     ${this.launched}`);

    }
}
const Rolls_Royce_Boat_Tail = new Vehicle("Rolls-Royce Boat Tail",'563 bhp', '305 Km/h','233 cr',2021);
Rolls_Royce_Boat_Tail.details();

console.log(`-------------------------------------------------------`);

const Bugatti_La_Voiture_Noire = new Vehicle("Bugatti La Voiture Noire",'1500 bhp','420 km/h', '158 cr',2021);
Bugatti_La_Voiture_Noire.details();

console.log(`-------------------------------------------------------`);

const Rolls_Royce_Sweptail = new Vehicle("Rolls Royce Sweptail", '453 bhp','250 km/h','108 cr', 2017);
Rolls_Royce_Sweptail.details();

console.log(`-------------------------------------------------------`);

const Lamborghini_Veneno = new Vehicle("Lamborghini Veneno",'750 bhp','355 km/h','70 cr', 2013);
Lamborghini_Veneno.details();

console.log(`-------------------------------------------------------`);

const  Lamborghini_Sian_FKP_37 = new Vehicle(" Lamborghini Sian FKP 37",'808 bhp', '350 km/h', '30 cr',2019);
Lamborghini_Sian_FKP_37.details();

console.log(`-------------------------------------------------------`);

console.log(`======= ==== Traversing an Array ===== =====`);
const arrayOfVehicles= ["Rolls Royce Boat Tail","Bugatti La Voiture Noire","Rolls Royce Sweptail","Lamborghini Veneno","Lamborghini Sian FKP 37"];
console.log(`Array of 5 objects of Vehicle Class :`);
console.log(arrayOfVehicles);
for (const element of arrayOfVehicles) {
    console.log(element);
}


console.log(`==================== Step 2 ===========================`);

class College  {
    constructor(name, place, type, established, state){
        this.name = name;
        this.place = place;
        this.type = type;
        this.established = established;
        this.state = state;
    }
    display(){
        console.log(`College Details => `)
        console.log(`   Name :         ${this.name}`)
        console.log(`   Place :        ${this.place}`) 
        console.log(`   Type :         ${this.type}`)
        console.log(`   Established :  ${this.established}`)
        console.log(`   State :        ${this.state}`);

    }
}
const IIT_Bombay = new College("IIT Bombay", "Mumbai","Technical", 1958,"Maharashtra");
IIT_Bombay.display();
console.log(`-------------------------------------------------------`);

const IISC = new College("IISC","Bangalore","Technical and Research", 1909, "Karnataka");
IISC.display();
console.log(`-------------------------------------------------------`);

const AIIMS = new College("AIIMS","Nagpur","Medical", 2018, "Maharashtra");
AIIMS.display();
console.log(`-------------------------------------------------------`);

const COEP = new College("COEP","Pune","Technical", 1854, "Maharashtra");
COEP.display();
console.log(`-------------------------------------------------------`);

 const GGM_JJ= new College("GGM/JJ", "Mumbai", "Medical", 1845, "Maharashtra");
 GGM_JJ.display();

console.log(`==================== ###### ===========================`);


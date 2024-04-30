console.log("Exe:58") // Exe:58
// program to take lots of scores & average
function avg_score(...score: number []) : number {
    let total = score.reduce((sum, score) =>sum + score, 0)
    return total/ score.length }
console.log(avg_score(20,50,38,96,47)); // log to get output
console.log(avg_score(75, 80, 87, 90, 92));

console.log("Exe:59") //Exe:59
/* program to  add special number
function makeAdd(valueToAdd: number): (number) => number {
    // funtion that take a number and adds special number to it
    return function(number: number): number {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 6
let addSix = makeAdd(6);
console.log(addSix(10));*/

console.log("Exe:60") // Exe:60
// building a userProfile by object method
// Method 1
let userProfile= {
    displayInforamation: {
    Name: "Mussarat",
    Age: 25 }}
    console.log(userProfile.displayInforamation)
// method 2
    // building a userProfile by Function
     let user_profile = (function() {
        //  user's details 
        let name = "Mussarat";
        let age = 25;
      return {    // shares the user's details
            displayInfo: function() {
                console.log(`Name: ${name}, Age: ${age}`);
            }
        };
    })();
    user_profile.displayInfo(); // Asking the profile to tell about the user

    console.log("Exe:61") // Exe:61
    // creating enum list
    enum VehicleType {
        Car,
        Truck,
        MotorBike
    } // showing one type of vehicle from list
    console.log(VehicleType.Car); // shows zero result because enums count from zero
   
    console.log("Exe:62") // Exe:62
// Creating bluePrint for Student Information
interface Student {
     name: string;
     age: number;
     subjects: string[]; }
let student: Student = {  // Filling bluePrint for example student
    name: "Alisha",
    age: 20,
    subjects: ["Computer Science", "Maths", "Physics"] };
console.log(student) //showing result

console.log("Exe:63") //Exe: 63
// handling custom data with type alias
type Shape = {
    kind : "circle" | "rectangle";
    radius? : number;
    width? : number;
    height? : number; };
    // Describing Circle
    let circle : Shape = {
        kind: "circle", radius: 4, width: 12, height: 5 };
        // Describing Rectangle
    let rectangle : Shape = {
        kind: "rectangle", width: 8, height: 4 };
    console.log(circle) // log to circle detail
    console.log(rectangle) // log to ractangle detail

    console.log("Exe: 64") // Exe: 64
    // funtion to combine a string "Age: " with a number 30
    function combineStirngAndNumber(text: string, number: number):string {
        return text + number; }
 console.log(combineStirngAndNumber("Age: ", 30))

 console.log("Exe: 65");
 // function to take Remainder whose leftover gives 1
 function remainder(num1: number, num2: number): number{
    return num1 % num2;
 } //triying with 7 & 3
 console.log(remainder(7, 3)); // shows 1

 console.log("Exe: 66")
 // function for true inputs
 function checkBothTrue(value1: boolean, value2: boolean): boolean{
      return value1 && value2;
 }
 // triying with true & false
 console.log(checkBothTrue(true, false));
 



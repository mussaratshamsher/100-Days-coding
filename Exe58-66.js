"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe:58"); // Exe:58
// program to take lots of scores & average
function avg_score(...score) {
    let total = score.reduce((sum, score) => sum + score, 0);
    return total / score.length;
}
console.log(avg_score(20, 50, 38, 96, 47)); // log to get output
console.log(avg_score(75, 80, 87, 90, 92));
console.log("Exe:59"); //Exe:59 
//program to  add special number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
console.log("Exe:60"); // Exe:60
// building a userProfile by object method
// Method 1
let userProfile = {
    displayInforamation: {
        Name: "Mussarat",
        Age: 25
    }
};
console.log(userProfile.displayInforamation);
// method 2
// building a userProfile by Function
let user_profile = (function () {
    //  user's details 
    let name = "Mussarat";
    let age = 25;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
user_profile.displayInfo(); // Asking the profile to tell about the user
console.log("Exe:61"); // Exe:61
// creating enum list for vehicle
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["MotorBike"] = 2] = "MotorBike";
})(VehicleType || (VehicleType = {})); // showing one type of vehicle from list
console.log(VehicleType.Car); // shows zero result because enums counts from zero
console.log("Exe:62"); // Exe:62
let student = {
    name: "Alisha",
    age: 20,
    subjects: ["Computer Science", "Maths", "Physics"]
};
console.log(student); //showing result
console.log("Exe:63"); //Exe: 63
// Describing Circle
let circle = {
    kind: "circle", radius: 4, width: 12, height: 5
};
// Describing Rectangle
let rectangle = {
    kind: "rectangle", width: 8, height: 4
};
console.log(circle); // log to circle detail
console.log(rectangle); // log to ractangle detail
console.log("Exe: 64"); // Exe: 64
// funtion to combine a string "Age: " with a number 30
function combineStirngAndNumber(text, number) {
    return text + number;
}
console.log(combineStirngAndNumber("Age: ", 30));
console.log("Exe: 65");
// function to take Remainder whose leftover gives 1
function remainder(num1, num2) {
    return num1 % num2;
} //triying with 7 & 3
console.log(remainder(7, 3)); // shows 1
console.log("Exe: 66");
// function for true inputs
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
// triying with true & false
console.log(checkBothTrue(true, false));

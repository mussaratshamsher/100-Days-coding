"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe: 94");
//.map() method to creat new array
//definng Array
const words = ["Governor", "Sindh", "IT", "Course"];
// .map() to creat new array
const lengths = words.map(word => word.length);
console.log(lengths); //output array:[8, 5, 2, 6]
console.log("Exe:95");
//Functon: .filter() method to return an array of numbers greater than 10. 
function filter(numbers) {
    return numbers.filter(number => number > 10);
}
const numbersArray = [5, 8, 11, 17, 20, 25, 32];
console.log(filter(numbersArray)); //outPut:[11,17,20,25,32]
console.log("Exe:96");
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const digits = [1, 2, 3, 4, 5, 6];
console.log(calculateSum(digits)); //shows a single number after adding all numbers
console.log("Exe:97");
//function that returns the current date in "DD-MM-YYYY" format
function currentDateFormate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
// shows todays date neatly & foramtted
console.log(currentDateFormate());
console.log("Exe:98");
//Calcualte & logs how many days are left untill New Year.
function daysUntillNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); //january of next year
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
//shows how many days are left in next New Year's Day
console.log(daysUntillNewYear() + "days untill New Year.");
console.log("Exe:99");
//Generate a date object representing your next birthday 
function nextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const next_Birthday = nextBirthday(11, 19); // example 19november
//log to get date of next birthday
console.log("Next birthday on:", next_Birthday.toLocaleDateString());
console.log("Exe:100");
//Use the JavaScript Math object to find the square root of 144.
const squareRoot = Math.sqrt(144);
console.log(squareRoot); //ooutput 12
console.log("Exe:101");
//  Generate a random integer between 1 and 10
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
// Outputs a random integer between 1 and 10
console.log(getRandomInt());
console.log("Exe:102");
// Calculate and log the absolute difference between the number -5 and 5.
const difference = Math.abs(5 - 5);
console.log(difference);

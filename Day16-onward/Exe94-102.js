"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe: 94");
//.map() method to creat new array
//definng Array
const words = ["Governor", "Sindh", "IT", "Course"];
// .map() to creat new array
const lengths = words.map(word => word.length); // gives new array
console.log(lengths); //output array:[8, 5, 2, 6]
console.log("Exe:95");
//Function: .filter() method to return an array of numbers greater than 10. 
function filter(numbers) {
    return numbers.filter(number => number > 10); //will return array of numbers greater than 10
}
const numbersArray = [5, 8, 11, 17, 20, 25, 32]; //Array of numbers
console.log(filter(numbersArray)); //outPut:[11,17,20,25,32]
console.log("Exe:96");
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
//making Array 
const numbers = [1, 2, 3, 4, 5];
//fuction to use .reduce() method
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; //will return sum of numbers of Array
});
console.log(sum); //log to get new Array of sum of numbers of array
console.log("Exe:97");
//function that returns the current date in "DD-MM-YYYY" format
function CurrentDateFormate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
// shows todays date neatly & foramtted
console.log(CurrentDateFormate());
console.log("Exe:98");
//Calcualte & log how many days are left untill New Year.
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
//Generate a random integer between 1 and 10
let randomInteger = Math.floor(Math.random() * 10) + 1;
// Outputs a random integer between 1 and 10
console.log(randomInteger);
console.log("Exe:102");
//Calculate and log the absolute difference between the number -5 and 5.
let num1 = -5;
let num2 = 5;
const difference = Math.abs(num1 - num2);
console.log(difference);

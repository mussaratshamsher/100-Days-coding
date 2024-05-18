console.log("Exe:103")
//funciton that returns a random boolean value, true or false.
function getRandomBoolean(): boolean {
    return Math.random() > 0.5; 
    //Returns true if the random number is greater than 0.5 
}
//outputs either true or false randomly
console.log(getRandomBoolean());

console.log("Exe:104")
// Create a function that generates a random hexadecimal color code.
function getRandomHexColor():string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // returns random color code
}
console.log(getRandomHexColor())
// Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
console.log("Exe:105")
//Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function rollDice(): number {
   return Math.floor(Math.random() * 6) + 1;
    //calculates a random integer from 1-6
}
console.log(rollDice()); //outputs a random number bw 1 & 6
//here, we mimic the action of rolling a dice & getting a result.

console.log("Exe:106")
//Determine if a given year is a leap year using comparison operators.
//function will return `true` for years that are leap years and `false` for non-leap years
function isLeapYear(year: number) {
    // Checks if the year is divisible by 4
    const divisibleBy4 = (year % 4 === 0);
   // Checks if the year is divisible by 100
    const divisibleBy100 = (year % 100 === 0);
  // Checks if the year is divisible by 400
     const divisibleBy400 = (year % 400 ===0);
  // If the year satisfies all conditions, it's a leap year
     return ((divisibleBy4 && !divisibleBy100) || divisibleBy400);
  }
  console.log(isLeapYear(2024)); // Output: true
  console.log(isLeapYear(2021)); // Output: false

  console.log("Exe:107")
//condition using logical operators that checks if a number is divisible by both 2&3
//The function will return `true` if the number is divisible by both 2 and 3, and `false` otherwise.
   
function isDivisibleByTwoAndThree(number: number) {
  return (number % 2 === 0) && (number % 3 === 0);
}
console.log(isDivisibleByTwoAndThree(12)); // Output: true
console.log(isDivisibleByTwoAndThree(7)); // Output: false

console.log("Exe:108")
 //Compare two strings to check if they are identical,ignoring case sensitivity.
 //This function will return `true` if 2 strings are identical after ignoring case sensitivity, & false otherwise.
 function compareStringsIgnoreCase(string1: string, string2: string) {
    return string1.toLowerCase() === string2.toLowerCase();
  }
console.log(compareStringsIgnoreCase("Hello", "hello")); //Output: true
console.log(compareStringsIgnoreCase("WORLD", "world")); //Output: true
console.log(compareStringsIgnoreCase("JavaScript", "Java")); //Output: false
 
console.log("Exe:109")
//Write an if statement that logs "Good Morning" if the current time is before 12 PM.
//This code will log "Good Morning" to the console if the current hour is less than 12.
const currentTime = new Date();
const currentHour = currentTime.getHours();

if (currentHour < 12) {
  console.log("Good Morning");
}
 console.log("Exe:110")
//Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
//else if function for assinging grades
function assignGrade(score: number) {
  if (score >= 90 && score <= 100) {
    return 'A';}
  else if(score >= 80 && score <=90) {
    return 'B';
  } else if(score >= 70 && score <= 80){
    return 'C';
  } else if(score >= 60 && score <= 70){
    return 'D';
  }else if(score >= 50 && score <= 60){
    return 'F';
  }
}// using log we can get desired result
console.log(assignGrade(75)) //output grade 'C'

console.log("Exe:111")
// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
//function to categories person's age group
function personAgeGroup(age: number){
  if (age >=6 && age <=13 ){
    return 'Child'; //sets category child
  } else if(age >=13 && age <= 20){
    return 'Teenager';//sets category teenager
  } else if (age >=20){
    return 'Adult';//sets category adult
  }
}
//log to get output of given age
console.log(personAgeGroup(18));



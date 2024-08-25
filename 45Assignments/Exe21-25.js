"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe:21");
// think of something you could store in a TypeScript Object.
// creating object named book
let book = {
    title: "Essential Typesript 5", author: "Adam Freeman", publishedYear: 2023
};
// console to see properties of object
console.log(`Book info: ${book.title} by ${book.author} published in ${book.publishedYear}`);
console.log("\n Exe:22");
//intentional error
let arrayData = ["Ali", "Sofia", 4, 8];
// creating index error
console.log("index error:", arrayData[4]);
// solving error
console.log(arrayData[2]);
console.log(arrayData[0]);
console.log("\n Exe:23");
// conditional Tests for variables
let a = 5;
let b = 10;
// Numeric test
// Test for true values
console.log("Is a equals to 5? I predict true");
console.log(a == 5); //1
console.log("Is a greater than 2? I predict true");
console.log(a > 2); //2
console.log("Is b less than 11? I predict true");
console.log(b < 11); //3
console.log("Is a not equals to 6? I predict true");
console.log(a != 6); //4
console.log("Is b less or equals to 10? I presict true");
console.log(b <= 10); //5
console.log("Is a greater than or equals to 4? I predict true");
console.log(a >= 4);
// Test for false values
console.log("\n Is b equals to 9? I predict false");
console.log(b == 9); //1
console.log("Is b greater than 11? I predict false");
console.log(b > 11); //2
console.log("Is b not equals to 10? I predict false");
console.log(b != 10); //3
console.log("Is a less than 4? I predict false");
console.log(a < 4); // 4
console.log("Is b greater or equal to 15? I predict false");
console.log(b >= 15);
console.log("Is a less or equals to 4? I predict false");
console.log(a <= 4);
//Exe 24
console.log("\n Exe:24");
//More Conditional Tests
// equality & unequality test for Numeric values are same as Exe:23
// equality & unequality test for string 
let persoNName = "Hina";
console.log("Is personName equals to Hina?");
console.log(persoNName == "Hina"); // equality
console.log("Is personName not equals to Hina?");
console.log(persoNName != "Hina"); // unequality
// test using lowercase function
let uppercaseApple = "APPLE";
console.log("\n Is APPLE equals to apple after converting into apple?");
console.log(uppercaseApple.toLowerCase() == "apple"); //equality
console.log("Is APPLE not equals to apple after converting into apple?");
console.log(uppercaseApple.toLowerCase() != "apple"); // unequality
// Tests using "and" & "or" operators
// AND Operator
console.log("\n a is equal to 5 & less than 6");
console.log(a == 5 && a < 6); // true
console.log("b is not equal to 11 & greater than 10");
console.log(b != 11 && b > 10); // false
// OR Operators
console.log("\n b is equal to 10 or less than 4");
console.log(b == 10 || b < 4); // true
console.log("a is not equal to 5 or greater than 6");
console.log(a != 5 || a > 6); // false
// Test wethter an item is an array
let fruits = ["mango", "cherry", "grapes"];
console.log("\n is cherry in fruits?"); // true statement for presence
console.log(fruits.includes("grapes"));
console.log("are Figs not in fruits?"); //true statement for absence
console.log(!fruits.includes("Figs"));
console.log("\n is mango not in fruits?"); // false statement for presence
console.log(!fruits.includes("mango"));
console.log("is apple in fruits?"); // false statement for absence
console.log(fruits.includes("apple"));
console.log("\n Exe:25");
//Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alienColor = "green";
if (alienColor === "green") {
    console.log("You just earned 5 points.");
}
; // vesion that passes
if (alienColor === "Red") {
    console.log("you just earned 5 points.");
}
; // version that fails
//# sourceMappingURL=Exe21-25.js.map
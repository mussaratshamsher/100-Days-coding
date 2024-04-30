"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe:85");
//function to find index of string within a sentence
function findCodingPosition(str) {
    return str.indexOf("coding");
}
//shows positon of Coding '6' within the sentence
console.log(findCodingPosition("Learn coding to be a Programmer."));
console.log("Exe:86");
//function that checks if the word "JavaScript" is present in a string
// includes method is used to find Presence
function isJavaScript(str) {
    return str.includes("JavaScript");
}
console.log(isJavaScript("I did not learn JavaScript!"));
console.log("Exe:87");
//function to take out first Ten Characters
function extraxtTenCharacters(str) {
    return str.substring(0, 10);
}
//shows first ten characters of the sentence
console.log(extraxtTenCharacters("Hello! I am learning Typescript."));
console.log("Exe:88");
//function to round Nearest Integer
function roundInteger(num) {
    return Math.round(num);
}
console.log(roundInteger(2.3)); //output 2
console.log(roundInteger(4.7)); // output 5
console.log("Exe:89");
//convert string into numbers 
function convertStringIntoNumber(str) {
    return parseFloat(str); //converts string into number
}
console.log(convertStringIntoNumber("123")); //output 123
console.log(convertStringIntoNumber("26.85")); //output 26.85
console.log("Exe:90");
//function to chaeck if a value is Not a Number
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("Name")); //output false
console.log(isValueNaN(45)); //output true
console.log("Exe:91");
//make Array of 3fruits & then add a fruit to the end
let fruits1 = ["Apple", "Grapes", "Melon"];
console.log(fruits1); //output Fruit Array
fruits1.push("Figs", "Grapefruit", "Apricot"); // adds fruits at the end of Array
console.log("modified Array of Fruits:", fruits1); // Array of modified fruits
console.log("Exe:92");
//function that removes & returns the last element of Array
function removeLastElement(arr) {
    return arr.pop(); //removes & returns last element of Aray
}
const fruit = ["Figs", "Grapefruit", "Apricot"];
console.log(removeLastElement(fruit)); //shows output apricot
console.log(fruit); //shows modified array after removing last element
console.log("Exe:93");
//index of "Banana" in an array and replace it with "Mango".
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana"); //finds banana's index
    if (index !== -1)
        fruits[index] = "Mango"; // replace banana with mango
}
const fruIts = ["Apple", "Grapes", "Banana"];
replaceBananaWithMango(fruIts);
console.log(fruIts); //output after replace

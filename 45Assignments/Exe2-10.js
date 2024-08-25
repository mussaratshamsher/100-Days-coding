"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exe 2
//person name in vairable & print message
let personName = "Eric";
console.log(`Hello, ${personName} would you like to learn some Pythan today?`);
// Exe 3
//write person name in lower, upper & title case
//lower case
let personname = "Babar";
console.log("lowercase:", personname.toLowerCase());
//upper case
console.log("upper case:", personname.toUpperCase());
//title case
console.log("titlecase:", personname.replace(/\bw/g, c => c.toUpperCase()));
// Exe 4
//print a famous qoute
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');
// Exe 5
//repeat Exe4 but store person name in a variable famousPerson
let famousPerson = "Albert Einstien";
let message = `${famousPerson} once said, "A personwho mever made a mistake never tried anything new."`;
console.log(message);
// Exe 6
//stripping names
let person_name = "\n\t BABAR AZAM\t\n";
console.log(person_name);
let stripped = person_name.trim();
console.log(stripped);
// Exe 7,8
// mathematical operations that result number 8
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// Exe 9
//store favourite number and creat message to reveal it
let favouriteNumber = 7;
console.log(`My favourite number is ${favouriteNumber}`);
//Exe 1o
//write two programs by adding comment
// stored nmae in a variable
let personName1 = "Mussarat";
// program1 to output message with name
console.log(`${personName1} says, \"Time does not change people, time reveals true faces of the people."`);
//program2 to change name into lower case
console.log("lowercase:", personName1.toLowerCase());
//# sourceMappingURL=Exe2-10.js.map
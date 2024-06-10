"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe:31");
//Add an if test to Exercise 30 to make sure the list of users is not empty.
let userNames = ["Admin", "User1", "User2", "User3", "User4"];
userNames = [];
if (userNames.length == 0) {
    console.log("Array is empty so you need to find some users!");
}
else { // greet users Exe:30
    userNames.forEach(userName => {
        if (userName === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName}, thank you for logging in again.`);
        }
    });
}
;
console.log("\n Exe:32"); // Exe:32
// create a program that simulates how websites ensure that everyone has a unique username.
// Array of Current users
let current_users = ["Yashfa", "ali", "Samya", "Bena", "Omar"];
// Array of new users that have some names of current users
let new_users = ["Hamza", "Ali", "Saman", "Bena", "Huma"];
// Loop through new users to check availability
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to entera new username.`);
    }
    else {
        console.log(`${newUser} is vailable.`);
    }
});
console.log("\n Exe:33"); // Exe:33
// Display numbers with their Suffix
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// loop through suffix with numbers
numbers.forEach(number => {
    let suffix = 'th';
    if (number === 1) {
        suffix = 'st';
    }
    else if (number === 2) {
        suffix = 'nd';
    }
    else if (number === 3) {
        suffix = 'rd';
    }
    ;
    console.log(`${number}${suffix}`);
});
console.log("Exe:34"); // Exe:34
// Favourite Pizza & expression message using for loop
let pizzas = ["Italian", "Greek", "cheese"];
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
console.log("Exe:35"); // Exe:35
//Highlight animals name with common trait
let animals = ["dog", "cat", "rabbit"];
animals.forEach(animal => {
    console.log(`${animal} would make a great pet.`);
});
console.log("Loyality is their common attribute.");

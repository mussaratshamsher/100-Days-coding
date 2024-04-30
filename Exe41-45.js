"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe: 41");
//Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Creating Array for magicians
let magicians1 = ["Ejaz Mughal", "Harry", "David"];
// Creating function
function show_magicians1(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// calling function to print Array
show_magicians1(magicians1);
console.log("\n Exe:42"); // Exe: 42
//Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
let magicians = ["Ejaz Mughal", "Harry", "David"];
function make_great(Magicians) {
    magicians.forEach(magicians => {
        console.log(`The Great ${magicians}`);
    });
}
make_great(magicians);
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magicians);
/*function make_great(magicians:string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great" + magicians[i];
    }
};
make_great(magicians); // Modifies the prigional Array
show_magicians(magicians); // shows modified Array */
console.log("Exe: 43"); //Exe:43
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function newArray(Magicians) {
    let greatMagicians = [];
    Magicians.forEach(magicians => {
        greatMagicians.push(`The Great ${magicians}`);
    });
    return greatMagicians;
}
let greatMagicians = newArray(magicians); // creats new modified array
console.log("Origional Magicians");
show_magicians(magicians); // origional list with show magician function
console.log("Great magicains:");
show_magicians(greatMagicians); // modified list
console.log("Exe:44"); // Exe: 44
function make_sandwich(...items) {
    console.log(`Make a sandwich with:
    ${items.join(', ')} `);
}
make_sandwich("cheese", "chicken");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprotus", "mustard", "mayo");
console.log("Exe:45"); // Exe:45
function make_car(manufacturer, model, otherFeatures) {
    return {
        manufacturer, model, ...otherFeatures
    };
}
console.log(make_car("Toyota", "Corolla", { Color: "Black", Year: 2020 }));
console.log(make_car("Ford", "Fiesta", { Color: "Blue", Sunroof: true }));

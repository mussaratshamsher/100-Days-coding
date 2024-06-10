console.log("Exe: 41");
//Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Creating Array for magicians
let magicians1: string[]= ["Ejaz Mughal", "Harry", "David"];
 // Creating function
function show_magicians1(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// calling function to print Array
show_magicians1(magicians1); 

console.log("\n Exe:42"); // Exe: 42
//Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
let magicians: string[]= ["Ejaz Mughal", "Harry", "David"];
function make_great(Magicians:string[]){
    magicians.forEach(magicians =>{
 console.log(`The Great ${magicians}`)
    })
   }
make_great(magicians)
function show_magician(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magicians)// shows modified Array

console.log("Exe: 43") //Exe:43
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function newArray(Magicians: string[]): string[] {
   let greatMagicians: string [] = [];
    Magicians.forEach(magicians => {
        greatMagicians.push(`The Great ${magicians}`);
    }); 
    return greatMagicians;
}
let greatMagicians = newArray(magicians); // creats new modified array
console.log("Origional Magicians");
show_magicians(magicians) // origional list with show magician function
console.log("Great magicains:");
show_magicians( greatMagicians); // modified list

console.log("Exe:44") // Exe: 44
 // Write a function that accepts a array of items a person wants on a sandwich.
 //Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]) {
    console.log(`Make a sandwich with:
    ${items.join(', ')} `);
}
make_sandwich("cheese", "chicken");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprotus", "mustard", "mayo");
console.log("Exe:45") // Exe:45
// Write a function that stores information about a car in a Object
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature
function make_car(manufacturer: string, model: string,
                 otherFeatures: Record<string, any>){
           return {
                manufacturer, model, ...otherFeatures
           } 
    }
console.log(make_car("Toyota", "Corolla", {Color: "Black", Year: 2020}));
console.log(make_car("Ford", "Fiesta",{Color: "Blue", Sunroof: true}));


 



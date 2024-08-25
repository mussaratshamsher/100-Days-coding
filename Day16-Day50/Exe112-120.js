"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\n Exe:112");
//a Map that stores the names of countries as keys and their capitals as values.
//Add three countries to the Map.
// Add countries and capitals to the map
//ceating variable for map
let countryCapitalMap = new Map();
//using set() will add key-value to map
countryCapitalMap.set('United States', 'Washington D.C.');
countryCapitalMap.set('France', 'Paris');
countryCapitalMap.set('Japan', 'Tokyo');
//console to get entire object
console.log(countryCapitalMap);
//We can access single value by the given code
//
console.log(countryCapitalMap.get('France')); // Output: Paris
console.log("\n Exe:113");
//a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
//ceating variable for map
let countrycapitalMap = new Map();
//using set() will add key-value to map object
countrycapitalMap.set('United States', 'Washington D.C.');
countrycapitalMap.set('France', 'Paris');
countrycapitalMap.set('Canada', 'Ottawa');
//We can access single value by get() or has() to console
console.log(countrycapitalMap.get('Canada'));
console.log("\n Exe:114");
//creating variable for map
const studentsMap = new Map();
//using set() will add key-value to map object
studentsMap.set(123, "Ali");
studentsMap.set(124, "Shan");
studentsMap.set(125, "Bilal");
//using for of loop for providing access to each key-value pair 
for (const [id, name] of studentsMap) {
    console.log(`Student ID: ${id}, Name: ${name}`);
}
console.log("\n Exe:115");
//switch statement to log the days of the week based on a number (1-7).
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
        console.log("Invalid day!");
        break;
    default:
}
console.log("\n Exe:116");
//Create a switch case that matches several cases to the same code block, representing seasons.
function getSeason(month) {
    let season;
    switch (month) {
        // Winter: December, January, February
        case 12:
        case 1:
        case 2:
            season = 'Winter';
            break;
        // Spring: March, April, May
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        // Summer: June, July, August
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        // Autumn/Fall: September, October, November
        case 9:
        case 10:
        case 11:
            season = 'Autumn/Fall';
            break;
        default:
            season = 'Invalid month!';
    }
    return season;
}
console.log(getSeason(2)); // Output: Winter
console.log(getSeason(6)); // Output: Summer
console.log(getSeason(10)); // Output: Autumn/Fall
console.log("\n Exercise:117");
//Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
let expression = 'case3';
switch (expression) {
    case 'case1':
        console.log('Case 1 matched');
        break;
    case 'case2':
        console.log('Case 2 matched');
        break;
    case 'case3':
        console.log('Case 3 matched');
        break;
    default:
        console.log('Default case');
}
console.log("\n Exe: 118");
//Write a loop that logs numbers from 1 to 10 to the console.
//making variable whose value will be 10
let n = 10;
for (let i = 1; i <= 10; i++) { // for loop to console numbers
    console.log(i);
}
;
console.log("\n Exe: 119");
//Create a while loop that logs "Hello, World!" 5 times.
let i = 1; // iniliazed expression
while (i <= 5) {
    console.log("Hello World!");
    i++;
}
;
console.log("\n Exe: 120");
//Use a for...of loop to iterate through an array of your favorite movies and log each one.
const favMovies = ["3 idiots", "Tare Zameen par", "The wicked witch", "Voyage, The journey"];
for (const movie of favMovies) {
    console.log(movie);
}
;
//# sourceMappingURL=Exe112-120.js.map
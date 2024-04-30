console.log("Exe:112")
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
//console.log(countryCapitalMap.get('France')); // Output: Paris

console.log("Exe:113")
//a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
//ceating variable for map
let countrycapitalMap = new Map();
//using set() will add key-value to map object
countrycapitalMap.set('United States', 'Washington D.C.');
countrycapitalMap.set('France', 'Paris');
countrycapitalMap.set('Canada', 'Ottawa');
//We can access single value by get() or has() to console
console.log(countrycapitalMap.get('Canada'));

console.log("Exe:114")
//ceating variable for map
const studentsMap = new Map();
//using set() will add key-value to map object
studentsMap.set(123, "Ali");
studentsMap.set(124, "Shan");
studentsMap.set(125, "Bilal");
//using for of loop for providing access to each key-value pair 
for (const [id, name] of studentsMap) {
  console.log(`Student ID: ${id}, Name: ${name}`);
}

console.log("Exe:115")
//switch statement to log the days of the week based on a number (1-7).
let day = 3;
switch (day){
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
console.log("Exe:116")
//Create a switch case that matches several cases to the same code block, representing seasons.




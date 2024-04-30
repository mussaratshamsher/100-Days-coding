console.log("Exe:76")
//funtion that takes 2numbers as parameters, adds & returns result
function addNumberParameters(num1: number, num2:number): number{
            return num1 + num2; //adds both parameters
} 
console.log(addNumberParameters(4,9)); // results sum of parameters

console.log("Exe:77")
// functin to greet a user by name or greet an anonymous user
function greetUser(name: string = "anonymous") {
    // greet with annonymous or given name user
    console.log(`assalam-o-alikum! welcome ${name}.`);
}
greetUser("Ishmal"); // calling function with name 
greetUser(); //calling function for annonymous output
 
console.log("Exe:78");
// Function Declaration for squaring number : method 1 of writing function
// we call function before difining
function squaringNumberDeclaration(number: number) :number {
    return number * number 
}
// Function Expression for squaring number :method2 of writng function
// we let variable & in its value we define function 7 call variable to print
let squaringNumberExpression = function(number: number): number{
    return number *number
}
 console.log(squaringNumberDeclaration(5)); // result for square of 5 by declaration
 console.log(squaringNumberExpression(5)); //shows result for square of 5 by expression
 
 console.log("Exe:79")
 /* creating & Accessing object properties
 // car object with properties make, model & year // access model property 
 let car= {
    make: "Toyota",
    model: "Corolla",
    year: 2020
 }
console.log(car.model) // log to output of model */

console.log("Exe:80")
console.log ("starting with Exe:0")
let car:any = {
    make: "Toyota",
    model: "Corolla",
    year: 2020, 
 }; 
 // adding key & value 'color' & updating year
    car.color = "black";
    car.year = 2021;
    console.log(car);

    console.log("Exe:81")
//A function that takes an object as an argument and logs all of its properties and values.
//This functon shows detail of an object
function logObjectProperties(obj: any) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue"});

console.log("Exe:82")
//function that takes a string as argument & returns the number of characters in the string.
function stringLenght(str: string): number{
    return str.length;
}
console.log(stringLenght("Shaheer"));

console.log("Exe:83")
// function to change string into uppercase & lowercase
function changeCase(str: string) {
    let upperCase = str.toUpperCase(); // converts in uppercase
    let lowerCase = str.toLowerCase(); // converts in lowercase
    console.log("Uppercase:", upperCase, "\n LowerCase:", lowerCase)
}
changeCase("Life is not bed of Roses.") // Example case

console.log("Exe:84")
// function to convert javascript sentence into typescript
function replaceJavascriptWihTypescript(sentence: string): string {
    return sentence.replace(/JavaScript/g,"TypeScript");
}
//output
console.log(replaceJavascriptWihTypescript("There is a comfort after Each Trouble."));


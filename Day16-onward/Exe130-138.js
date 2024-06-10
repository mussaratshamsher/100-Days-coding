"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportFunction = void 0;
//Exe#130-138
console.log('Exe:130');
//Explain how to export a function from one JavaScript file and import it into another file.
let exportFunction = () => {
    console.log('I exported My first Function Practically.');
}; //
exports.exportFunction = exportFunction;
(0, exports.exportFunction)(); //logs result here & same in file Exe130.ts as being imported there
console.log('Exe:131');
//Create two modules; one that exports a class, and another that imports the class and creates an instance.
// In another file:
const Person_js_1 = require("./Person.js");
const alice = new Person_js_1.Person("Anaya");
alice.greet(); // Outputs: Hello, my name is Alice
//This snippet imports the Person class and uses it to create an instance.
console.log('Exe:132');
//These code illustrates the syntax and usage differences between default and named exports.
console.log('Exe:133');
//Write a JavaScript object and convert it into a JSON string.
let studentData = {
    name: 'Iqra',
    age: '6',
    school: 'Iqra Islamic School'
};
let jsonString = JSON.stringify(studentData);
console.log('jsonString', jsonString);
console.log('Exe:134');
//Take a json string and parse it into a Javascript object.
const json_string = '{"name": "John", "age": 30, "city": "New York"}';
const javaObject = JSON.parse(json_string);
console.log('javaObject', javaObject);
console.log('Exe:135');
//Explain how can you format a JSON String with proper identation for readability
//The `JSON.stringify` method converts a JavaScript value to a JSON string while also providing options to control the formatting of the output.
//we can use the `JSON.stringify` method with two additional parameters: 
//`replacer` and `space`. The `replacer` parameter is used to filter and transform the output,
//while the `space` parameter is used to specify the whitespace for indentation.
//reconverting & formatting javaobject into json string using stringfy from above exercise
const formatJson = JSON.stringify(javaObject, null, 2);
console.log("reconverted JSON String", formatJson);
//logs javaobject into json stirng with 2whitespaces that makes it readable
console.log('Exe:136');
//Use console.log() to debug and track the value of a variable inside a loop.
let count = 5; //making variable
for (let i = 0; i <= 5; i++) {
    console.log("Current value of 'count' is:", i); //tracks the value of i within loop that how it changes
}
console.log("Final value of 'count' is:", count); //gives final output
console.log('Exe:137');
//Implement a try-catch block to handle potential errors in a block of code
// to handle potential errors in a block of code we use the `try` and `catch` keywords
try {
    // Code that may potentially throw an error
    const result = Function(); // Assuming, this function may throw an error
    //Continues execution of the code if no eror occurred
    console.log(result);
}
catch (error) {
    //Handles the error here
    console.error('An error occurred:', error);
}

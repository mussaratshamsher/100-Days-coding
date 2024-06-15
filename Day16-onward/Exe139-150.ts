console.log('Exe: 139 ');
//Q: List three reserved words in JavaScript and create a valid use case for each.

//function: used to declare a new function
function addNumbers( a:number, b :number){
    console.log(a+b);
}
addNumbers(2,4);

//2. 'let' : used to declare a block-scoped variables in javascript
let message = "Hello, world!";
console.log(message);
//3. 'return' : used to exit the current function & specify the value to be returned.
function multiplyNum(a: number, b:number){
    return a*b
}
multiplyNum(3,4);
console.log('Exe: 140 ');
//Q: Explain the error that occurs when trying to use a reserved word as a variable name.

//When we try to use a reserved word as a variable name in TypeScript, it results in a syntax error.
//Reserved words are predefined keywords that have specific meanings and functionalities.

//let let = 5; throws error & shows following
//let' is declared but its value is never read.ts(6133)
//Identifier expected. 'let' is a reserved word in strict mode. Modules are automatically in strict mode.ts(1214)
//'let' is not allowed to be used as a name in 'let' or 'const' declarations.ts(2480)

console.log('Exe: 141 ');
//Q: Discuss the significance of the await reserved word in asynchronous JavaScript.

//The `await` reserved word in asynchronous JavaScript is significant as it plays a crucial role in dealing with promises and async operations. 
//It is used only within async functions and allows for more readable and concise code when working with promises.

//Here are some key significances of the `await` keyword:
//1.Awaits Promise Resolution 2. Simplifies Async Flow 3. Error Handling 4. Sequential Execution 5. Compatibility with Promises 

console.log('Exe: 142');
//Q: Create a Promise that resolves with "Hello, World!" after 2 seconds.
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 200);//waits 2sec
  });
  
  myPromise.then((result) => {
    console.log(result); // Output: Hello, World!
  });

console.log('Exe: 143');
//Q: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// Create a promise that resolves after 1 second
const my_Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
       //reject('Promise rejected'); // Uncomment this line to see rejection handling
    }, 100);
  });
  
  // Handle the resolution and rejection of the promise using .then() and .catch()
  my_Promise.then((result) => {
    console.log(result); // Output: Promise resolved
  }).catch((error) => {
    console.error(error); // Output: Promise rejected (if reject() is called)
  });

console.log('Exe: 144');
//Explain the use of the Promise.all() method with an example.

//The Promise.all() method is used to handle multiple promises at once and wait for all of them to resolve. 
//It takes an array of promise objects as input and returns a single promise .
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 100);
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 150);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise 3 rejected'));
    }, 200);
  });
  
  Promise.all([promise1, promise2, promise3])
     .then((values) => {
        console.log(values); // Output: ['Promise1 resolved', 'Promise2 resolved']
     })
     .catch((error) =>{
        console.error(error); // Output: Error: 'Promise3 rejected'
     });

console.log('Exe: 145');
//Q: Create a function that accepts a callback and invokes it with some arguments.

type CallbackFunction = (arg1: string, arg2: number) => void;

function invokeCallback(callback: CallbackFunction): void {
  const arg1 = "Hello";
  const arg2 = 42;
  callback(arg1, arg2);
}
// Example usage
function myCallback(arg1: string, arg2: number): void {
  console.log(`arg1: ${arg1}, arg2: ${arg2}`);
}
invokeCallback(myCallback);

console.log('Exe: 146');
//Q: Show an example of a callback function used to filter an array of numbers.
//1
// This array of numbers will be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers: number[] = numbers.filter((number) => number > 5);

console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
//2
function isEven(num: number): boolean {
    return num %2 === 0! 
  }
  //an array of numbers
  const nums: number[] = [1, 2, 3, 4, 5, 6,7,8];
  //Using the filter method with the callback function to get only even numbers
  const evenNumbers: number[] = nums.filter(isEven);
  console.log(evenNumbers); // Output: [2, 4, 6, 8]

  console.log('Exe: 147');
//Explain how to handle errors in a callback pattern.

// Function that uses a callback pattern, including error handling
function fetchData(
    callback: (error: Error | null, data?: string) => void
  ): void {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";
  
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
      callback(null, data); // No error, data is fetched successfully
    } else {
      callback(error); // Passes error to the callback
    }
  }
  
  // Using the fetchData function with error handling in the callback
  fetchData((error, data) => {
    if (error) {
      console.error(error.message); // Handles the error
    } else {
      console.log(data); // Processes the data
    }
  });
  // Demonstrates a callback pattern where errors are handled gracefully.

console.log('Exe: 148');
//Q: Demonstrate the use of the setTimeout() function to execute code after a delay.

console.log("Start");

setTimeout(() => {
  console.log("Delayed code executed!");
}, 200); // Delay of 200 milliseconds (2 seconds)

console.log("End");
//"Start" and "End" will log immediately, while "Delayed code executed!" will log after the specified delay. 
//This demonstrates how setTimeout() is used to schedule and execute code with a delay.

console.log('Exe: 149');
//Explain the concept of the event loop in JavaScript with an example.

//Here's an example of how the event loop works in JavaScript:

console.log('Start');

setTimeout(function() {
  console.log('Callback 1');
}, 200);

setTimeout(function() {
  console.log('Callback 2');
}, 100);

console.log('End');
/*  output:
Start
End
Callback 2
Callback 1  
      The first setTimeout has a delay of 2 seconds, and the second has a delay of 1 second.
  This order of execution demonstrates how the event loop works. The "Start" and "End" messages are logged immediately, 
  while the callbacks inside setTimeout are scheduled to be executed after their respective delays. */

 console.log('Exe: 150');
//Q: Describe how asynchronous callbacks differ from synchronous code execution.

//Asynchronous code allows the program to be executed immediately whereas the synchronous code will block further execution of 
//the remaining code until it finishes the current one.
//synchronous code
console.log("Welcoeme");
//2
let message1 = "My synchronous Program";
console.log (message1);
//above both examles are of synchronous program
//Asynchronous Program's example is given in Exe: 149



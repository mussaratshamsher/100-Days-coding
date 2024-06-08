console.log("\n Exe121")
//Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
//let num = 10
for(let i =1; i<=10; i++){ // sets i value 1-10
 if(i==5){ //skips 5 & prints next
continue; }
 console.log(i);//log to output
}
console.log("\n Exe122")
//Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let count = 10;
while(count>0){ //sets count from 10
     if(count===5){ //stops count when reaches to 5
        break;
    } 
    console.log(count);//log to output
  count--; //sets reverse count from 10.. 
}
console.log("\n Exe123")
//Create a loop that iterates through a string and stops when it finds the first vowel.

function findFirstVowel(str: string): string | undefined {
  const vowels = ['a', 'e', 'i', 'o', 'u']; //vowels to check in string

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i].toLowerCase();

    if (vowels.includes(currentChar)) {
      return currentChar; //returns first vowel
    }
  }

  return undefined; // No vowel found
}
// Example usage
const inputString = 'Hello World'; //variable to check vowel in string
const firstVowel = findFirstVowel(inputString);//equalizing function to new variable
console.log('First Vowel:', firstVowel); //prints first vowel
//Example 2
const vowelString = 'Miss Me';
console.log ("First Vowel 2", findFirstVowel( vowelString));

console.log("\n Exe124")
//Create a function inside an object that returns the object's own name property using the this keyword.
let student = {
  name: 'Ali',
  getName: function(){ //function as a key's value
    return this.name; //returns name property of object(student)
  }
};
console.log(student.getName());// outputs Ali

console.log("\n Exe: 125")

//Modify a method in an object to use the this keyword to access another property in the same object.

type MyObject = { //type object
  property1: string;
  property2: number;
  method:  () => void;
};
const myObject: MyObject = {
  property1: 'Hani',
  property2: 15,
  method  () {
    console.log(`${this.property1}, ${this.property2}`);
  } //using this keys can be called within a function
}
myObject.method();//calling object's key to get 1,2 key's value

console.log("\n Exe126")
//Explain how the this keyword changes its value when used inside a nested function within a method.
type MyDetail = { //type object
  name: string;
  age : number;
  method:  () => void;
};
const myDetail: MyDetail = {
  name: 'Hani',
  age : 15,
  method  () {
    console.log(`${this.name}, ${this.age}`);
    function nestedfunction(){
      console.log('this.name');
      }
 } //using this keys can be called within a function
}
myDetail.method();

console.log("\n Exe127")
//Convert a traditional function expression to an arrow function.
//traditional function expression
function traditionalFun() {  
   console.log("traditional function");
}
traditionalFun();
// Arrow function expression
let arrowFun = () => {
  console.log ("Arrow Function")
}
console.log('arrowFun');

console.log("\n Exe128")
//Create an arrow function that takes multiple parameters and returns the product of all parameters.
let multiParameter =(num1: 3, num2: 4, num3: 2) => {
      return num1*num2*num3 //returns product of parameters
}
console.log( multiParameter); //output 24

console.log("Exe129")
//Explain how this behaves differently in arrow functions compared to traditional functions.
const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
  },
 /* arrowFunction: () => {
    console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
  },*/
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
//traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.

   
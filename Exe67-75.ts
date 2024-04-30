console.log("Exe:67")
//function that adds number and string & represents a number
function addNumberAndString(number1:number, numberString: string): number{
     return number1 + Number(numberString); //combines number &stringnumber
      } 
      //log to get ouput
      console.log(addNumberAndString(10, "8"));

      console.log("Exe:68")
// function that multiply 2 decimal numbers
function multiplyDecimals(num1: number, num2: number): number{
    return Math.round((num1 * num2) * 100) / 100;
    // multiply numbers & rounds the result to 2decimals
}
console.log(multiplyDecimals(0.2 , 0.4));//trying with 2 decimal numbers
console.log("Exe:69")
// function that divides 2numbers & gives Quotient & Remainder
function divideAndRemainder(dividend: number , divisor:number): 
        {quotient: number; remainder: number} {
            // to calculate Quotient & Remainder
            let quotient = Math.floor(dividend / divisor);
            let remainder = dividend % divisor;
            return { quotient, remainder}; // returns both in object
        }
   console.log(divideAndRemainder(13, 3));// otput
      console.log("Exe:70")
      // function to print numbers from 1-5
function numbersWithLet() {
   for (let a = 1; a<= 5; a++) {
    console.log(a); // logs numbers 1-5
  }//a is not accessible outside the loop because it is defined with let
}
numbersWithLet() //shows that let limits 'a' within the loop.

console.log("Exe:71")
// compare use of let and const, reassigned value & catch error
let personAge = 25  // use of let
personAge  = 28 // value can be reassigned
console.log(personAge ) // shows reassigned value
 
const home = "Orangi town";
   // home = "Malir" //causes error
// catching error to log
    console.log("Cannot assign to 'home' because it is a constant");
 console.log("Exe: 72")
 // block scopped variable: variables that are affective within the block{}
 // they prevent errors when used outside the block
 // Demonstrating block scope
 {
    let blockLet = "Let:Prints when used within block";
    const blockConst = "Const:Also Prints only when used within block "
    console.log(blockLet)
    console.log(blockConst)
 }
  // repeating blockLet outside the Block 
   //console.log(blockLet)   //creates error
   console.log("Error: cannot find name 'blockLet' as calling outside the block.")
// calling blockconst outside the bock 
//console.log(blockConst)   //creates error
console.log("Error: cannot find name 'blockConst' as calling outside the block.")
 
console.log("Exe: 73")
// function to show assinging & updating of Variable values
function updateVariable() {
    let number = 7; // iniitally assigned value
    console.log("initial value:" , number) // logs initial value
    number = 10; // updated value
    console.log("Updated value:" , number) // logs updated value
};
updateVariable(); //assigning value to variable here shows how can we update value

console.log("Exe: 74")
//swap values of 2 variables // a=5 , b=10 swap values so that a=10, b=5
// function to perform swapping
function swapValues() {
   let a =5,
   b =10
   console.log("Before Swap: a= " , a);  console.log("Before Swap: b=" , b);
   let temp = a // temporarily stored a in a variable
   a=b         // sets a to b
   b = temp // swaps values
    console.log("After Swap: a= ", a);  console.log("After Swap: b= ", b);
}
swapValues() // calling function to see results

console.log("Exe: 75")
// Compound assignment Operators //using initial value x=4 perform series of operations
// for making code cleaner write .i.e. x +=2
function compoundOperators(){
   let x = 6; //starting with 6 equal to X
   console.log("Initial x: ", x);
   x +=2 // adds 2 in initial value
   console.log("After Addition in x= ", x); //shows After Addition
   x -=4 // subtracts 4 from x
   console.log("After Subtraction x= ", x); //shows After Subtraction
   x *=2 // multiplies x with 2
   console.log("After Multiplication x= ", x); //shows After Multiplication
   x /=2 // // divides x with 2
   console.log("After division x= ", x); //shows After division
}
compoundOperators(); // shows each print taking updated value of x after operation


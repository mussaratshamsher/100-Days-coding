
//Geneircs Class

// Generic Class `User`
class User<T = string> {
    constructor(public value: T) {}

// Method that takes a message of type `T` & displays it along with the `value `property`
show(msg: T): void{
    console.log(`${msg} - ${this.value}`);  
}
  }
//Creating an instance of `User` with a specific type parameter (string)
let userOne = new User<string>("Greeting");
console.log(userOne.value); //output: "Greeting"
userOne.show("Message"); //output: "Message - "Greeting"

//Creating an instance of `User` with a type parameter that can be a number or stirng
let userTwo = new User<number | string> (100);
console.log(userTwo.value); //output: 100
userTwo.show("Message"); //output: "Message - 100"



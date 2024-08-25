"use strict";
//Geneircs Class
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Class `User`
class User {
    value;
    constructor(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` & displays it along with the `value `property`
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
//Creating an instance of `User` with a specific type parameter (string)
let userOne = new User("Greeting");
console.log(userOne.value); //output: "Greeting"
userOne.show("Message"); //output: "Message - "Greeting"
//Creating an instance of `User` with a type parameter that can be a number or stirng
let userTwo = new User(100);
console.log(userTwo.value); //output: 100
userTwo.show("Message"); //output: "Message - 100"
//# sourceMappingURL=3.generics-class.js.map
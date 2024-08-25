"use strict";
//Type System Concepts
Object.defineProperty(exports, "__esModule", { value: true });
//1. Union Types: specified multiple types can be assigned using union type
let myVal;
myVal = "Alia"; //valid
console.log(myVal);
myVal = true; //valid
console.log(myVal);
//in any other type's value is assigned then throws error. like myVal = 8//throws error
//2. Literal Type: specified values can be assigned using literal type
let direction;
//other than these four we can't assign any other value in direction
//3. NullAble Type
let username = "Faris";
function greetuser(username) {
    if (username === null) {
        console.log("Hello, anonymous Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetuser("Faris");
greetuser(null);
let myName = "Anaya";
const student1 = {
    name: 'Salim',
    age: 15,
    email: 'example@gmail.com',
};
const student2 = {
    name: 'Saliha',
    age: 14,
};
console.log(student1);
console.log(student2);
const person = {
    name: "Shan",
    age: 25,
    email: "example@gmail.com",
    job: "Sales Manager",
    salary: 50000,
};
console.log(person);
//# sourceMappingURL=type-sys-concepts.js.map
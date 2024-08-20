
//Type System Concepts

//1. Union Types: specified multiple types can be assigned using union type

let myVal: string | boolean;
myVal = "Alia"; //valid
console.log(myVal);

myVal = true; //valid
console.log(myVal);

//in any other type's value is assigned then throws error. like myVal = 8//throws error

//2. Literal Type: specified values can be assigned using literal type
let direction: "left" | "right" | "up" | "down";
//other than these four we can't assign any other value in direction

//3. NullAble Type
let username: string | null = "Faris";
 
function greetuser(username: string | null) {
    if(username === null) {
        console.log("Hello, anonymous Guest!");        
    } else {
        console.log(`Hello, ${username}!`);       
    }   
}
greetuser("Faris");
greetuser(null);

//4. Type Alias: types can be created for complex data structures
type MyString = string;
let myName: MyString = "Anaya";

//another example
type Student = {
    name: string;
    age: number;
    email? : string;
};
const student1 : Student = {
    name: 'Salim',
    age: 15,
    email: 'example@gmail.com',
}
const student2 : Student = {
    name: 'Saliha',
    age: 14,
}
console.log(student1);
console.log(student2);

//5. Intersaction Type
type Employee ={ 
    job : string;
    salary: number;
}
type CombinedType = Student & Employee;
const person: CombinedType = {
    name: "Shan",
    age: 25,
    email: "example@gmail.com",
    job: "Sales Manager",
    salary: 50000,
}
console.log(person);



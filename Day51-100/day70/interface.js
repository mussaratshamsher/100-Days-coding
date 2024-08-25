"use strict";
//Interface: blueprint of an Object
Object.defineProperty(exports, "__esModule", { value: true });
const worker = {
    name: "Ali",
    age: 25,
};
//creating object that has Person1 type
const student = {
    name: " Sanaya",
    age: 15,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    }
};
student.greet("Hello, TailWind CSS!");
//Creating object 'usersettings' that adhere to the merged 'settings'
let userSettings = {
    theme: true,
    font: "Arial",
    sidebar: false,
    external: true,
};
//# sourceMappingURL=interface.js.map
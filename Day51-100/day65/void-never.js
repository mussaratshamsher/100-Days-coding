"use strict";
//Void & Never
Object.defineProperty(exports, "__esModule", { value: true });
//Void:
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet('ali');
function noReturnValue() {
    //does not return value
}
//Never:
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        //never exits(infinite loop)
    }
}
//# sourceMappingURL=void-never.js.map
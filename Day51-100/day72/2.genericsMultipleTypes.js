"use strict";
//Generics Multiple types
Object.defineProperty(exports, "__esModule", { value: true });
//Generics Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100));
console.log(returnTypeEx("Hello!"));
//Arrow Function with Generics  `returnTypeArrowSyntax`
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Algeria"));
//Generics Function 'testType'
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType("Pakistan"));
// Returns: "the value is Pakistan & type is string"
console.log(testType(100));
//  Returns: "The value is 100 & type is number"
//Generics Function `multiTypes`
function multiTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} & second Value ${valueTwo}`;
}
console.log(multiTypes("Shama", 100));
// Returns: "The First Value is Shama & second value is 100"
console.log(multiTypes("Sofi", true));
// Returns: "the first value is Sofi & second value is true"
//# sourceMappingURL=2.genericsMultipleTypes.js.map
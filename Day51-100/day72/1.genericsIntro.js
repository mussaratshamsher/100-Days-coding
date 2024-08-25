"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generics Introduction: A genric function that returns the input vlaue as it is 
function returnType(val) {
    return val;
}
//Usage of generic function with diffeent types
const numvalue = returnType(100);
const strValue = returnType("Alia");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(`Number Value: ${numvalue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);
//# sourceMappingURL=1.genericsIntro.js.map
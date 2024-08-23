
//Generics Multiple types

//Generics Function `returnTypeEx`
function returnTypeEx<T>(val: T): T {
    return val;
}

console.log(returnTypeEx<number>(100));
console.log(returnTypeEx<string>("Hello!"));

//Arrow Function with Generics  `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T> (val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Algeria"));

//Generics Function 'testType'
function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType<string>("Pakistan"));
// Returns: "the value is Pakistan & type is string"

console.log(testType<number>(100));
//  Returns: "The value is 100 & type is number"

//Generics Function `multiTypes`
function multiTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} & second Value ${valueTwo}`
}
console.log(multiTypes<string, number>("Shama", 100));
// Returns: "The First Value is Shama & second value is 100"

console.log(multiTypes<string, boolean>("Sofi", true));
// Returns: "the first value is Sofi & second value is true"


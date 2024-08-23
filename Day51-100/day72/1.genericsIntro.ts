

//Generics Introduction: A genric function that returns the input vlaue as it is 
function returnType<T> (val: T): T {
    return val;
}

//Usage of generic function with diffeent types
const numvalue: number = returnType<number>(100);
const strValue: string = returnType<string>("Alia");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1,2,3,4]);

console.log(`Number Value: ${numvalue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);





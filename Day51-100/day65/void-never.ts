
//Void & Never

//Void:

function greet ( name: string) :void {
    console.log(`Hello, ${name}`);    
}
greet('ali');

function noReturnValue(): void {
    //does not return value
}


//Never:

function throwError (message: string) : never {
    throw new Error(message);
}
 
function infiniteLoop() :never {
    while (true) {
        //never exits(infinite loop)
    }
}

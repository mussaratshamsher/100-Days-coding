
//Optional ,Default  & rst Parameter

//Optional Parameters: parameter with ? is optional param

function optionalparam(name: string, age?: number) {
    if(age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);       
    } else {
       console.log(`Hello, ${name}`);      
    }
}
optionalparam("Ali");
optionalparam("Bina", 20);

//Default Parameter: parameter with assigned value

function defaultparam (name: string, age:number = 15) {
    console.log(`Hello! ${name}, You are ${age} years old.`)    
}
defaultparam("Hina");
defaultparam("Hamza", 18);

//Rest Parameter: parameter with elipses(...) notation

function restParam(...nums: number[]) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    } 
    return result;
}

console.log(restParam(2,4,6,8,10));

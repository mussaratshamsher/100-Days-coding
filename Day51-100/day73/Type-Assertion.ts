
// Type Assertion

let data: any = "10";

// Type assertion to treat "data" as a string
console.log((data as string).repeat(3));

// Type assertion to treat "data" as a number
console.log((data as number).toString());

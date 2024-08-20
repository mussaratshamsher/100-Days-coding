
//Type Annotation with Arrays

let colours: string[] = ["Red", "Blue", "Pink", "White"];

for(let i= 0; i<colours.length; i++){
    console.log(`Colour: ${colours[i].toUpperCase()}`);  
}



//Type Annotation with Multidimensional Arrays

let arrayOne: number[] = [1,2,3,4,5];
let arrayTwo: string[] = ["A", "B", "C"]
let arrayThree: (string | number) [] = [1,2,3,4, "A", "B", "C"];




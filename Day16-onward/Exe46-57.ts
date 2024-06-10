console.log("Exe:46") // Exe:46
// obeject for laptop
let laptop={
    make: "hp",
    model: "EliteBook",
    year: "2018",
    describe : function() {
        console.log(`This laptop is ${this.make} ${this.model} ${this.year}.`);
    }
};
laptop.describe();//calling object to output of properties in a sentence

console.log("Exe:47") // Exe:47
// Advanced destructing Array
let laptops = [
    {make: "hp", model: "EliteBook", year: "2018"},
    {make: "Apple", model: "MacBook", year: "2020"},
    {make: "Dell", model: "chromeBook", year: "2021"}
];
let [laptop1 , laptop2, laptop3] = laptops;
console.log(laptop1);  console.log(laptop2);  console.log(laptop3); 

console.log("Exe:48") // Exe:48
// use of spread operator to combine Arrays
let pricesSet1 = [1500, 1800, 2000];
let pricesSet2 = [1800, 2000, 2500];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a,b) => a-b);
console.log(combinedPrices);

console.log("Exe: 49") // Exe 49
// Defines a function that accepts multiple hobbies as arguments
function myHobbies(...hobbies:string[]) {
    hobbies.forEach(hobby=> { 
        console.log(`I enjoy ${hobby}.`); // statement for each Hobby
    });
}
// calling fucnton with Hobbies
myHobbies("Learning", "Coding", "Travelling");

console.log("Exe:50") // Exe:50
// Using template literals to define a multiline string
let myIdealday = `My ideal day would involve:
1. Waking up in Fajar & say Prayer.
2. Recitation of Quran-e-pak.
3. Spending few hours in coding and Practicing. `;
// console to multiline string
console.log(myIdealday);

console.log("Exe:51") // Exe:51
// funtion for calculating area of a rectangle
function rectangularArea (height: number , width:number) : number{
    return height * width ;
}
// refactorizing into arrow function
let rectangularAreaArrow = (height:number , width:number) => {
   console.log( height * width)
}
// arguments to check result
rectangularAreaArrow (5 , 10);
rectangularAreaArrow (4 , 10);

console.log("Exe:52") //Exe:52
// object for details of smartphone
let smartPhone = {
       brand : "Infinix",
       deviceName: "Infinix HOT 11 Play",
       Model : "Infinix x688b",
       androidVersion : "11",
       upTime: "160:04:45",
       specs : {
       storage: "RAM 4GB, ROM 64GB",
       screenSize : "6.82 inches",
       batterytiming: "0ne week stand by"
       }
    };
    // result of object detail
    console.log(smartPhone);

    console.log("Exe: 53") // Exe:53

    // list of programmer's skill
    let programmerSkill = {
        languages: ["HTML", "TypeScript", "Pythan"],
        frameWork: ["React", "Next.js", "Angular"],
        hardSkills: ["cloud computing", "database", "text editors"],
        tools: [ "Webpack", "Docker" ,"Git"]
    };
// specific skills from list
let {languages, frameWork, hardSkills, tools } = programmerSkill
// selecting specific skill from each category
console.log(`Language: ${languages[1]} , FrameWork: ${frameWork[0]} ,
 HardSkill: ${hardSkills[1]} , Tool: ${tools[2]}`);

 console.log("Exe:54") //Exe:54
// flexible list
function dynamicObjectkey (key: string, value: string) {
    let dynamicObject: { [key: string]: string } = {};
    // list with changeable name
    dynamicObject[key] =value
    return dynamicObject
}
// user preference list
let userPreference = dynamicObjectkey("theme", "dark");
// user's choice result
console.log(userPreference);

console.log("Exe:55") //Exe:55
// creating array of numbers
let numbers1 = [1,2,3,4];
// map function to double each number of array
let doubleNumbers = numbers1.map(number => number * 2);
// log to see new list
console.log(doubleNumbers);

console.log("Exe:56") // Exe:56
// array of mixed items
let mixedArray = [1, "sana", "apple", false, "turnip", 2, true];
// filter function to separate an array of strings
let stringsArray = mixedArray.filter(item => typeof item === "string");
// output of stringsArray
console.log(stringsArray);

console.log("Exe:57") // Exe:57
// list of grades
let grades = [75, 80, 87, 90, 92]
// function to find grade
let aveGrade = grades.reduce((total, grade) =>total + grade , 0) / grades.length
// log to get outPut
console.log(aveGrade);


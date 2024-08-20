
//Enum: Set of constant values

enum Days {
    Sunday, 
    Monday, 
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

const today: Days = Days.Saturday;

console.log(`Today is ${Days[today]}`);

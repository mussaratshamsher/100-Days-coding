
//Interface: blueprint of an Object

interface Person {
    name: string;
    age: number;
}

const worker : Person = {
    name: "Ali",
    age: 25,
}

//Interface Methods & Parameters
interface Person1 {
    name: string;
    age: number;
    greet(message: string): void ;
}

//creating object that has Person1 type
const student : Person1 ={
    name:" Sanaya",
    age: 15,
    greet(message: string) {
        console.log(`${this.name} says: ${message}`);       
    }
}
student.greet("Hello, TailWind CSS!")

//Homepage Interface Declaration

interface Settings {
    readonly theme: boolean;
   font: string;
}

// Articles Page Interface 
interface Settings {
    sidebar: boolean;
}
// Contact page Reopening
interface Settings {
    external: boolean;
}
//Creating object 'usersettings' that adhere to the merged 'settings'
let userSettings : Settings = {
    theme : true,
    font: "Arial",
    sidebar : false,
    external : true,
};







//Object case
let objectOne : {
   name: string;
   age : number;
   jobTitle?: string;
   address:{
    street: string;
    city: string;
   };
};

objectOne = {
    name: "Alina",
    age: 20,
    jobTitle: "Teacher",
address: {
    street: "main shah faisal chock s#1",
    city: "Liary",
}
}

//Another way
let objectTwo: {
    name: string;
    age: number;
    course: {
        subjects: string;
        fees: number;
    }
}
= {
    name : "Ali",
    age: 20,
    course: {
        subjects: "IT, C++",
        fees: 3000,
    }
}

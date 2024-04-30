
console.log("Exe:26");
//Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alienColor1 = "Green"; // version that runs a block
if(alienColor1 == "Green") {
    console.log("Player just earned 5 points!");
} else
{
    console.log("Player just earned 10 points!")
}; 
alienColor1 = "Yellow"; // version that runs b block
if(alienColor1 == "Green") {
    console.log("Player just earned 5 points!");
} else
{
    console.log("Player just earned 10 points!")
}; 

console.log("\n Exe:27"); // Exe:
//Turn your if-else chain from Exercise 5-4 into an if-else chain.
// 1st version
let alienColor = "Green";
if(alienColor  == "Green") {
    console.log("Player shot down a Green alien so he earned 5 points!");
}
else if(alienColor == "Yellow") {  
    console.log("Player shot down a Yellow alien so he earned 10 points!");
} 
else if(alienColor == "Red")   {
    console.log("Player shot down a Red alien so ha earned 15 points!")
};
// 2nd version
alienColor = "Yellow";
if(alienColor  == "Green") {
    console.log("Player shot down a Green alien so he earned 5 points!");
}
else if(alienColor == "Yellow") {  
    console.log("Player shot down a Yellow alien so he earned 10 points!");
} 
else if(alienColor == "Red")   {
    console.log("Player shot down a Red alien so ha earned 15 points!")
};
// 3rd version
alienColor = "Red";
if(alienColor  == "Green") {
    console.log("Player shot down a Green alien so he earned 5 points!");
}
else if(alienColor == "Yellow") {  
    console.log("Player shot down a Yellow alien so he earned 10 points!");
} 
else if(alienColor == "Red")   {
    console.log("Player shot down a Red alien so ha earned 15 points!")
};
console.log("\n Exe:28"); // Exe 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life.
let age = 22;
if(age<2) {
    console.log("You are a baby.");
 }else if(age<4) {
console.log("You are a toddler");
 }else if(age<13){
    console.log("you are a kid.");
 }else if(age<20) {
    console.log("You are a teenager.");
 }else if(age<65) {
    console.log("You are an adult.");
 } else {
    console.log("You are an elder.");
 };
 // creatin array of fruits and checking wehther is in array
 console.log("\n Exe:29"); // Exe:29
 // Make an array of favorite fruits & then write a series of independent if statements to check presence
let favFruits = ["Fig", "Kiwi", "Melon","Guava", "Pear"];
if (favFruits.includes("fig")) {
    console.log("I really like fig, it increases RBCs.");
} 
if(favFruits.includes("Kiwi")) {
    console.log("Kiwi helps to maintain blood sugar.");
}
if(favFruits.includes("Melon")) {
    console.log("I likes to eat Melon as it boosts immunity.");
} 
if(favFruits.includes("Guava")) {
    console.log("I like unripe Guava as it helps in digestion.");
}
if(favFruits.includes("Pear")) {
    console.log("Pear improves Heart health.")
}
console.log("\n Exe:30") // Exe:30
//Make array of five or more usernames, including the name 'admin
//loop through usernames to personalise greetings
let usernames = ["Admin", "User1", "User2", "User3", "User4"];
usernames.forEach(username => {
    if (username ==="Admin"){
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});


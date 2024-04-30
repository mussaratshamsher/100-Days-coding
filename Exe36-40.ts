
console.log("Exe:36"); //Exe:36
//Write a function called make_shirt() that accepts a size and the text of a message
function make_shirt (size: string , message: string){
console.log(`Make a ${size} T-shirt with the message "${message}" printed on it.`);
};
make_shirt("Medium", "Journey to better Life");//calling function to output

console.log("\n Exe:37"); // Exe: 37
//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function makeShirt (size:string = "Large", message:string = "I love Typescript") {
    console.log(`Make a ${size} T-shirt with the message "${message}" print on it.`);
};
console.log("calling function with by-default values:");
makeShirt();
console.log("\n calling function with Medium size & default message:");
makeShirt("Medium");
console.log("\n Calling function with Small size & new message:");
makeShirt("Small" , "Working to be a good Programmer");
console.log("\n Exe:38") // Exe:38
//Write a function called describe_city() that accepts the name of a city and its country.
function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city}, ${country}`);
};
// Calling function
describe_city("\n Karachi");
// Calling function with a new parameter
describe_city("\n Lahore");
// Calling function with both new parameter
describe_city("\n Madina" , "Saudi Arabia");

console.log("\n Exe:39"); //Exe:39
//Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:"Lahore, Pakistan"
// Creating function with parameters which return
function city_country(city: string , country: string) : string {
    return `${city} , ${country}`; 
}
// Calling function to print returned value
console.log(city_country("Lahore" , "Pakistan"));
console.log(city_country("Dhaka" , "Bangladesh"));
console.log(city_country("Paris" , "Japan"));

console.log("\n Exe:40"); // Exe:40
// Write a function called make_album() that builds a Object describing a music album
// Creating objects for music album
interface Album {
    artist:string;
    title: string;
    tracks?: number
}
// making function for Album
function make_album(artist:string , title:string , tracks?:number):
Album{
    let album: {artist: string, title: string, Tracks?: number} = {
        artist: artist,
        title: title
    }
    if(tracks !== undefined){
        album.Tracks = tracks
    } 
    return album;
}
// 
let album1:Album = make_album("Atif Aslam", "The first Album");
let album2:Album = make_album("Ali Zaffar" , "The second Album");
let album3:Album = make_album("Ayza" , "The third Album" , 12);
// calling variable to print
console.log(album1);
console.log(album2);
console.log(album3);
console.log("Exe11");
//store few names in array and print message to each at once
//array of names
let friendsname = ["Amna","Heeba","Saman","Saira"];
//print each element by accessing at once
friendsname.forEach(friendname =>
     console.log(friendname));//prints name on by one

console.log("\n Exe12");
//using names array of Exe11 print message also with person's name
friendsname.forEach(friendname => console.log(`Hello ${friendname}, How are you?`));
console.log("\n Exe13");
// array of modes of transportation & print a statement about items
let transportationModes = ["Sports Bike","Bus","Car","Van"];
transportationModes.forEach(mode => console.log(`I would like to own a ${mode}.`));

console.log("\n Exe 14");
//make a list of atleat 3people & print message invitation to dinner
 //guestlist = ["Alina","Aina","Ayesha","Arisha"];
//guestlist.forEach(oneGuest => console.log(`Assalam-o-Alaikum! ${oneGuest},would you like to dinner with me?`));
console.log("same result as that of Exe 15 except 1st index(Alina)")
console.log("\n Exe 15");
//using guestlist of Exe14 print new set of invitation because one of the guest can't come
let guestlist = ["Alina","Aina","Ayesha","Arisha"];
// one of guest can't come
let dontCome = guestlist[0];
console.log(dontCome, "Cannot come to dinner.");
// chnging guest
guestlist.splice(0,1, "Anaya");
// message for new guest list
guestlist.forEach(guest => console.log(`Assalam-o-Alaikum! ${guest}, would you like to dinner with me?`));

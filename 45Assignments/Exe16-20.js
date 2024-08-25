"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exe:16");
//guestlist of Exe15
let guestList = ["Alina", "Aina", "Ayesha", "Arisha"];
//found a new large table
console.log("Congratulations! I just found a bigger table.");
//Adding 3more guests in the Array
guestList.unshift("Sana"); //adds guest at the start of array
guestList.push("Shan"); //adds guest at the end of array
guestList.splice(guestList.length / 2, 0, "Zoha"); //adds guest at the middle by checking its length
guestList.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("\n Exe:17");
// message for inviting only 2 guests
console.log("Unfortunately! the new table is not available on time so i can only invite 2 guests.");
// Removing guest from list untill 2 left
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to dinner.`);
}
;
// Message for last 2guests
console.log(`Dear ${guestList}, you are still invited to Dinner`);
// removing guest from list
guestList.splice(0, guestList.length);
// empty list
console.log(guestList);
console.log("Exe:18");
// places i want to visit
let places = ["China", "Saudi Arabia", "Iraq", "Japan", "Bangladesh"];
// print in origional, alphabetical, rverse & reverse alphabetical order
console.log("Origional order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Origional order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Origional order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("origional order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Rverse alphabetical order:", places);
// Exe19
console.log("\n Exe:19");
//using guest list of Exe14 print message to describe the guest length
guestList = ["Alina", "Aina", "Ayesha", "Arisha"];
// Printing guestlist's length 
console.log("I am inviting ${guestlist.length} people to Dinner");
console.log("\n Exe:20");
//Think of something you could store in an array.
let countries = ["Japan", "Iceland", "Canada", "Plastine"];
console.log("Countries that i want to visit are:", countries);
//# sourceMappingURL=Exe16-20.js.map
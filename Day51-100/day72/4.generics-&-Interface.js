"use strict";
// Generics & Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Class `Collection`
class Collection {
    data = [];
    // Method to add an item of type `T` to the collection
    add(item) {
        this.data.push(item);
    }
}
//Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
//# sourceMappingURL=4.generics-&-Interface.js.map

// Generics & Interfaces

//Interface definitions for Book & Game
interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

// Generic Class `Collection`
class Collection<T> {
    public data: T[] = [];

    // Method to add an item of type `T` to the collection
    add(item: T): void {
        this.data.push(item);
    }
}

//Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
})
console.log(itemTwo);





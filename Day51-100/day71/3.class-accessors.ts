
// Class Accessors
class ProductExAccessors {
    //private property
    private _price  : number;

    constructor(private id: number, private name: string) {
        this._price = 0; //defult price
    }

    //public getter for price
    get price() :number {
        return this._price;
    }

    // public setter for price
    set price(newPrice: number) {
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            console.log("Price cannot be negative.");           
        }
    }

    getproductInfo() : string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this._price}`;
    }
}

//creating instance of productExAccessors class
const productEx = new ProductExAccessors(1, "Egg");

console.log(productEx.getproductInfo()); //default price

//Using the 'setter' to update the price
productEx.price = 20.0;

console.log(productEx.getproductInfo()); //Update price

//Attmpting to set a negative price triggers the  setter logic
productEx.price = -5; //price cannot be negative.










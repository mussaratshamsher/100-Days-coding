
//Class Implement Interface

class ProductImpementInterface {
    // Private Propetry
    private static nextId: number = 1;

    constructor(private id: number, private name: string) {}

    static generateNextId() :number {
        return ProductImpementInterface.nextId++;
    }

    getProductInfo() : string {
        return `ID: ${this.id}, Name:${this.name}`
    }
}
// Generate unique ID's for products using the staitc method
const product1implement = new ProductImpementInterface(
    ProductImpementInterface.generateNextId(), "Widget"
);
const product2implement = new ProductImpementInterface(
    ProductImpementInterface.generateNextId(), "Gadget"
);

console.log(product1implement.getProductInfo()); //ID: 1, name: Widget
console.log(product1implement.getProductInfo()); //ID: 2, name: Gadget




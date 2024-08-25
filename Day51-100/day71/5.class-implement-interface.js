"use strict";
//Class Implement Interface
Object.defineProperty(exports, "__esModule", { value: true });
class ProductImpementInterface {
    id;
    name;
    // Private Propetry
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductImpementInterface.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name:${this.name}`;
    }
}
// Generate unique ID's for products using the staitc method
const product1implement = new ProductImpementInterface(ProductImpementInterface.generateNextId(), "Widget");
const product2implement = new ProductImpementInterface(ProductImpementInterface.generateNextId(), "Gadget");
console.log(product1implement.getProductInfo()); //ID: 1, name: Widget
console.log(product1implement.getProductInfo()); //ID: 2, name: Gadget
//# sourceMappingURL=5.class-implement-interface.js.map
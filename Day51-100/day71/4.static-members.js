"use strict";
//Static Members
Object.defineProperty(exports, "__esModule", { value: true });
class ProductStaticMembers {
    id;
    name;
    //private property
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMembers.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
//generate unique ID's for products using the static method
const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo()); //ID: 1, Name: Widget
console.log(product2static.getProductInfo()); //ID: 2, Name: Gadget
//# sourceMappingURL=4.static-members.js.map
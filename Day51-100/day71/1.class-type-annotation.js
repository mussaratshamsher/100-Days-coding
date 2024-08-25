"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Class type Annotations
class Product {
    //property type annotation
    id;
    name;
    price;
    constructor(id, name, price) {
        //constructor's parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    //Method type annotations
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
}
//create an instance o fthe product class
const product1 = new Product(1, "Widget", 20.0);
//Access class properties & call a method
console.log(product1.getProductInfo());
//# sourceMappingURL=1.class-type-annotation.js.map
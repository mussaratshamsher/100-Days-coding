"use strict";
//PolyMorphism & Method Override
Object.defineProperty(exports, "__esModule", { value: true });
//An abstract class
class AbstractEntity {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractEntity.nextId++;
    }
}
// A concrete subclass
class Entity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, ${this.name}`;
    }
}
//another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}
//Generate unique ID's for entities using static method
const entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
const entity2 = new Entity(AbstractEntity.generateNextId(), "Gadget");
// Polymorphism: Call getEntiyInfo method on different concrete subclass
console.log(entity1.getEntityInfo()); //ID: 1, Name: Widget
console.log(entity1.getEntityInfo()); //ID: 2, Name: Gadget
//# sourceMappingURL=7.Polymorphism-&-Method-Override.js.map
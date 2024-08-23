
//PolyMorphism & Method Override

//An abstract class
abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {}
    static generateNextId(): number {
        return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
}
// A concrete subclass
class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, ${this.name}`
    }
}
//another concrete subclass
class AnotherEntity extends AbstractEntity {
constructor(id: number, name: string) {
    super(id, name)
}
getEntityInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
}

}
//Generate unique ID's for entities using static method
const entity1: AbstractEntity = new Entity(AbstractEntity.generateNextId(),"Widget");

const entity2: AbstractEntity = new Entity(AbstractEntity.generateNextId(),"Gadget");

// Polymorphism: Call getEntiyInfo method on different concrete subclass

console.log(entity1.getEntityInfo()); //ID: 1, Name: Widget
console.log(entity1.getEntityInfo());  //ID: 2, Name: Gadget






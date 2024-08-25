"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Access Modifiers
//1.Access public property
class MyClassPublic {
    name;
    constructor(name) {
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name);
//2. Access Private Property
class MyClassPrivate {
    secret;
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret);
    }
}
const instancePrivate = new MyClassPrivate("My secret");
//console.log(instancePrivate.secret); this throws error as secret is private property
instancePrivate.revealSecret();
//3. Access Protected property
class Parent {
    familyName;
    constructor(name) {
        this.familyName = name;
    }
}
class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}
const parentEx = new Parent("Sami");
const childEx = new Child("Ameer");
//console.log(parentEx.familyName); //Property 'familyName' is protected and only accessible within class 'Parent' and its subclasses.
childEx.introduceFamily(); //valid way to access protected property
//# sourceMappingURL=2.access-modifiers.js.map
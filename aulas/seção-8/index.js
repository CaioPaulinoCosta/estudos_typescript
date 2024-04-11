"use strict";
// 1 - campos em classe
class User {
}
const caio = new User();
console.log(caio);
caio.name = "Caio";
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jessica = new NewUser("Jessica", 23);
console.log(jessica);
// 3 - propriedade readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
// fusca.wheels = 5
// 4 - herança
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Fala ai otário!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
// 6 - This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetals() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetals();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const caioCosta = new Person("Caio", "Costa");
console.log(caioCosta.name);
console.log(caioCosta.fullName);
// 8 - Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
}
const myCoords = new Coords();
myCoords.fillX = 5;
myCoords.fillY = 10;
console.log(myCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World!");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é: ${this.title}`;
    }
}
// 9 - Override de métodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 10 - Visibilidade (public)
class C {
    constructor() {
        this.x = 10;
    }
}
class D {
}
const cInstance = new C();
const dInstance = new D();
console.log(cInstance.x);
console.log(cInstance.x);
// 10 - Visibilidade (protected)
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
}
const fInstace = new F();
fInstace.showX();
// 10 - Visibilidade (private)
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
}
const pObjs = new PrivateClass();
console.log(pObjs.showName());
// 11 - Static members
class StaticMembers {
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
// 12 - Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
// 13 - Parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Quantidade total ${this.qty}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
// console.log(newShirt.price);
// 14 - Class Expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Caio");
console.log(pessoa);
// 15 - Abstract Class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObkect = new AbstractExample("Josias");
newAbstractObkect.showName();
// 16 - Relação entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);

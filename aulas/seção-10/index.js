"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(target);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("metodo de myClass");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObjct = new MyClass();
myObjct.testing();
// 2 - multiplos decorators
function aDecorator() {
    return function (target, propertKey, descriptor) {
        console.log("executou a.");
    };
}
function bDecorator() {
    return function (target, propertKey, descriptor) {
        console.log("executou b.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    aDecorator(),
    bDecorator()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing;
// 3 - class decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "UserDecorator") {
        console.log("Criando usuario!");
    }
}
let UserDecorator = class UserDecorator {
    constructor(name) {
        this.name = name;
    }
};
UserDecorator = __decorate([
    classDec
], UserDecorator);
const paulinho = new UserDecorator("Paulinho");
console.log(paulinho);
// 4 - decorator de método
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class MachineDecorator {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquinha é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], MachineDecorator.prototype, "showName", null);
const tratorDecorator = new MachineDecorator("Trator");
tratorDecorator.showName();
// 5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 5 - property decorator
function fortmatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class idDecorator {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    fortmatNumber()
], idDecorator.prototype, "id", void 0);
const newItemDecorator = new idDecorator("1");
console.log(newItemDecorator);
// 6 - exemplo real com class decorator
function createDate(creared) {
    createDate.prototype.createAt = new Date();
}
let BookDecorator = class BookDecorator {
    constructor(idBook) {
        this.idBook = idBook;
    }
};
BookDecorator = __decorate([
    createDate
], BookDecorator);
let PenDecorator = class PenDecorator {
    constructor(idPen) {
        this.idPen = idPen;
    }
};
PenDecorator = __decorate([
    createDate
], PenDecorator);
const newBook = new BookDecorator(12);
const pen = new PenDecorator(55);
console.log(newBook);
console.log(pen);
// 7 - exemplo real com method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usúario já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usúario: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);

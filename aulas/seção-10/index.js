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

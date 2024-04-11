// 1 - campos em classe
class User {
  name!: string;
  age!: number;
}

const caio = new User();

console.log(caio);

caio.name = "Caio";

// 2 - constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const jessica = new NewUser("Jessica", 23);

console.log(jessica);

// 3 - propriedade readonly

class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

// fusca.wheels = 5

// 4 - herança

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("trator");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);

// 5 - Métodos

class Dwarf {
  name;

  constructor(name: string) {
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
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetals() {
    console.log(
      `Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência.`
    );
  }
}

const volvo = new Truck("Volvo", 400);

volvo.showDetals();

// 7 - Getters
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
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
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;
    console.log("X inserido com sucesso");
  }
  set fillY(y: number) {
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

// 9 - Herdando interfaces
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }
  itemTitle() {
    return `O titulo do post é: ${this.title}`;
  }
}

const myPost = new blogPost("Hello World!");

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;
  constructor(title: string) {
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
  public x = 10;
}

class D {}

const cInstance = new C();
const dInstance = new D();

console.log(cInstance.x);
console.log(cInstance.x);

// 10 - Visibilidade (protected)
class E {
  protected x = 10;
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
  private name = "Private";

  showName() {
    return this.name;
  }
}

const pObjs = new PrivateClass();

console.log(pObjs.showName());

// 11 - Static members
class StaticMembers {
  static prop = "Teste static";
}

console.log(StaticMembers.prop);

// 12 - Generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

const newItem = new Item("caixa", "surpresa");
console.log(newItem);

// 13 - Parameters properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
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
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Caio");

console.log(pessoa);

// 15 - Abstract Class
abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
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
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();

console.log(doguinho);

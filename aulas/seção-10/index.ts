// 1 - exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator!");
  return function (
    target: any,
    propertKey: String,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(target);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("metodo de myClass");
  }
}

const myObjct = new MyClass();
myObjct.testing();

// 2 - multiplos decorators
function aDecorator() {
  return function (
    target: any,
    propertKey: String,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou a.");
  };
}

function bDecorator() {
  return function (
    target: any,
    propertKey: String,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou b.");
  };
}

class MultipleDecorators {
  @aDecorator()
  @bDecorator()
  testing() {
    console.log("Terminando execução");
  }
}

const multiple = new MultipleDecorators();
multiple.testing;

// 3 - class decorator
function classDec(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name === "UserDecorator") {
    console.log("Criando usuario!");
  }
}

@classDec
class UserDecorator {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const paulinho = new UserDecorator("Paulinho");
console.log(paulinho);

// 4 - decorator de método
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: String,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class MachineDecorator {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquinha é: ${this.name}`;
  }
}

const tratorDecorator = new MachineDecorator("Trator");

tratorDecorator.showName();

// 5 - acessor decorator
class Monster {
  name?;
  age?;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }
  @enumerable(true)
  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 10);
console.log(charmander);

// 5 - property decorator
function fortmatNumber() {
  return function (target: Object, propertKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };
    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };
    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    });
  };
}

class idDecorator {
  @fortmatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItemDecorator = new idDecorator("1");
console.log(newItemDecorator);

// 6 - exemplo real com class decorator
function createDate(creared: Function) {
  createDate.prototype.createAt = new Date();
}

@createDate
class BookDecorator {
  idBook;

  constructor(idBook: number) {
    this.idBook = idBook;
  }
}
@createDate
class PenDecorator {
  idPen;

  constructor(idPen: number) {
    this.idPen = idPen;
  }
}

const newBook = new BookDecorator(12);
const pen = new PenDecorator(55);

console.log(newBook);
console.log(pen);

// 7 - exemplo real com method decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usúario já postou!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}
class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usúario: ${content}`);
  }
}

const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);

newPost.post("Meu segundo post!", newPost.alreadyPosted);

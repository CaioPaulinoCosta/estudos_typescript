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

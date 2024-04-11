// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet();

// 2 - importação de arquivos
import { x } from "./variable.js";

console.log(x);

// 3 - multiplas importacoes
import { a, b, myFunction } from "./multple.js";

console.log(a);
console.log(b);
myFunction();

// 4 - multiplas importacoes
import { someName as name } from "./changename.js";
console.log(name);

// 5 - import all
import * as myNumbers from "./numbers.js";
console.log(myNumbers);

const nX = myNumbers.n1;
console.log(nX);

// 6 - importar tipos / interfaces
import { Human } from "./myType.js";

class User implements Human {
  name;
  surname;
  age;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullname() {
    console.log(this.name + " " + this.surname);
  }
}

const caio = new User("Caio", "Costa", 18);
console.log(caio.fullname());

"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jessica = new User('Jessica');
const caio = new SuperUser('Caio');
console.log(jessica);
console.log(caio);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jessica);
userGreeting(caio);

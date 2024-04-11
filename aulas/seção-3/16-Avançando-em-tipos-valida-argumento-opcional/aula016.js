"use strict";
function advancedGreeting(firtsName, lastName) {
    if (lastName !== undefined) {
        return (`Olá, ${firtsName} ${lastName}, tudo bem?`);
    }
    return (`Olá, ${firtsName}, tudo bem?`);
}
console.log(advancedGreeting('Caio', 'Costa'));
console.log(advancedGreeting('Caio'));

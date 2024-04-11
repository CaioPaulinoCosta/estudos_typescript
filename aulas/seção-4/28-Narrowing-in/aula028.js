"use strict";
// Atualmente não funciona na versão de 2022
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log('O cachorro é um SRD');
    }
}
showDogDetails(turca);
showDogDetails(bob);

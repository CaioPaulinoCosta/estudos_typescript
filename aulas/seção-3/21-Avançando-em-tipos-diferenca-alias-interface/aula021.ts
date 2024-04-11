interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: 'Caio', age: 18}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     name: number
// }
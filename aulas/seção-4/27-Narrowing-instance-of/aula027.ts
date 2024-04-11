class User {
    name

    constructor(name: string) {
        this.name = name

    }

}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jessica = new User('Jessica')
const caio = new SuperUser('Caio')

console.log(jessica)
console.log(caio)

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(jessica)
userGreeting(caio)
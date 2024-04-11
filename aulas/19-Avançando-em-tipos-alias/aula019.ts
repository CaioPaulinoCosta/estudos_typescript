function showID(id: string | number) {
    console.log(`O ID é: ${id}`)
}

showID(1)
showID('200')

// aplicando Alias

type ID =  string | number

function showIDalias(id: ID) {
    console.log(`O ID é: ${id}`)
}

showIDalias(1)
showIDalias('200')
function operations(arr: number[], operation?: string | undefined) {
    if(operation) {
        if(operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if(operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log('Por favor, defina uma operação!')
    }
}

operations([1,2,3])
operations([1,2,3], 'sum')
operations([2,4,6], 'multiply')

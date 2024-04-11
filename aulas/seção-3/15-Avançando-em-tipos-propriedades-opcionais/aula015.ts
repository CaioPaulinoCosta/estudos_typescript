function showNumbers(a: number, b: number, c?: number) {
    console.log('A: ' + a)
    console.log('B: ' + b)
    console.log('C: ' + c)
    if(c) {
        console.log('C: ' + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(1, 2)
// showNumbers(1)
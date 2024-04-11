function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    }
}

doSomething('1')
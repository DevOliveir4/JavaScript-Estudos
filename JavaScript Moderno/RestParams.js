// Rest params (...) permite representar um número indefinido de argumentos como um array.

function values (a, ...rest) {
    console.log(a)
    console.log(...rest)
    console.log(rest)
}

values(1, 2, 4, 5, 12, 4, 2)
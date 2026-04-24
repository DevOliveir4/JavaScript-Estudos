// Destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Gabriel Oliveira", "carmooliveiragabriel@gmail.com"]

// Desestruturando array
const [username, email] = data

console.log(username)
console.log(email)

// Desestruturando somente o primeiro
const fruits = ["Banana", "Apple", "Orange"]

const [banana] = fruits

console.log(banana)

// Ignorando o primeiro na destruturacao

const [_, apple] = fruits

console.log(apple)

const [, , orange] = fruits
console.log(orange)
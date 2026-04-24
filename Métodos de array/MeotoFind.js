// O método finde retorna o primeiro elemento do Array que satisfaz a condição. Caso contrario, undefined é retornado


// Retorn o primeiro elemento que o valor é maior que 10
const values = [1,3,54,12]
const found = values.find((value) => value > 10)
console.log(found)

// Retorna o primeiro objeto que tem o nome = "banana"
const fruits = [
    {name: "apple", quantity: 23},
    {name: "banana", quantity: 11},
    {name: "orange", quantity: 18}
]

const results = fruits.find((result) => result.name === "banana")
console.log(results)
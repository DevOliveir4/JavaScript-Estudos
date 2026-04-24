const address1 = {
    street: "Av. Brasil",
    number: 20
}

// Isso não é uma cópia, é uma referência
const address2 = address1
address2.number = 15

console.log(address1)
console.log(address2)

// Aqui sim estamos criando um novo objeto usando as propriedades e valores de address1
const address3 = {...address1}
address3.number = 10
console.log(address3)

// Exemplo de referência com array
const list1 = ["Apple", "Banana", "Orange"]

const list2 = list1 

list2.push("Watermelon")

console.log(list1)
console.log(list2)

const list3 = [...list1]

list3.push("Kiwi")

console.log(list3)
let fruits = ["Apple", "Watermelon", "Strawberry", "Lemon"]

// Econtra o retorna o índice do elemento no Array
let position = fruits.indexOf("Lemon")
console.log(position)

// Remove o item a partir da posicao do indice
fruits.splice(position, 1)
console.log(fruits)
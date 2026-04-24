
/*
    OBJETO
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedadses e métodos;
*/



// Cria um objeto vazio.
const obj = {}
console.log(obj)
console.log(typeof obj)

// cria um objeto com propriedades de métodos.
const user = {
    email: "carmooliveiragabriel@gmail.com",
    age: 18,
    name: {
        fist_name: "Gabriel",
        sur_name: "Oliveira do Carmo",
    },
    adrress: {
        street: "Rua Praia Funda",
        number: 4,
        city: "Lauro de Freitas",
    },
    message: function() {
        console.log("Oi", this.name.fist_name)
    }
}

// Acessndo propriedades de métodos usando a notação de ponto.
console.log(user.email)

// Acessando propriedades aninhadas.
console.log(user.name.fist_name)

// Acessando métodos.
user.message()

// Acessndo propriedades de métodos usando a notação de colchetes.
console.log(user["email"])

// Acessando propriedades aninhadas.
console.log(user["name"]["fist_name"])

// Acessando métodos.
user["message"]()

// Atualizando valores de uma propriedade
const product = {
    name: "Teclado",
    quantity: 100
}

console.log(product.quantity)

product.quantity = 90  

console.log(product.quantity)

console.log(product)


